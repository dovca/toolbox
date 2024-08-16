import {identity} from '../misc/identity';
import type {Numeric, Fn, Maybe, Sorter} from '../types/utils';

export function converge<Input, Mapped = Input>(
	comparator: Sorter<Mapped>,
	mapper: Fn<Mapped, Input> = identity,
): Fn<Maybe<Input>, readonly Input[]> {
	return (values) => {
		let best: Maybe<Input> = undefined;
		let mappedBest: Maybe<Mapped> = undefined;

		for (const value of values) {
			if (best === undefined) {
				best = value;
				mappedBest = mapper(value);
				continue;
			}

			const mappedValue = mapper(value);

			if (comparator(mappedBest!, mappedValue) < 0) {
				best = value;
				mappedBest = mappedValue;
			}
		}

		return best;
	};
}

export function minimize(): Fn<Maybe<Numeric>, readonly Numeric[]>;
export function minimize<T>(mapper: Fn<Numeric, T>): Fn<Maybe<T>, readonly T[]>;
export function minimize<T>(mapper: Fn<Numeric, T> = identity): Fn<Maybe<T>, readonly T[]> {
	return converge<T, Numeric>((a, b) => b.valueOf() - a.valueOf(), mapper);
}

export function maximize(): Fn<Maybe<Numeric>, readonly Numeric[]>;
export function maximize<T>(mapper: Fn<Numeric, T>): Fn<Maybe<T>, readonly T[]>;
export function maximize<T>(mapper: Fn<Numeric, T> = identity): Fn<Maybe<T>, readonly T[]> {
	return converge<T, Numeric>((a, b) => a.valueOf() - b.valueOf(), mapper);
}
