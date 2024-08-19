import {identity} from '../misc/identity';
import type {Numeric, Fn, Maybe, Sorter, IterationCallback} from '../types/utils';
import {forwardIterator} from '../iterators/forward';

export function converge<Input, Mapped = Input>(
	comparator: Sorter<Mapped>,
	mapper: IterationCallback<Mapped, Input> = identity,
): Fn<Maybe<Input>, readonly Input[]> {
	return (values) => {
		let best: Maybe<Input> = undefined;
		let mappedBest: Maybe<Mapped> = undefined;

		for (const [value, index, array] of forwardIterator(values)) {
			const mappedValue = mapper(value, index, array);

			if (index === 0 || comparator(mappedBest!, mappedValue) < 0) {
				best = value;
				mappedBest = mappedValue;
			}
		}

		return best;
	};
}

export function minimize(): Fn<Maybe<Numeric>, readonly Numeric[]>;
export function minimize<T>(mapper: IterationCallback<Numeric, T>): Fn<Maybe<T>, readonly T[]>;
export function minimize<T>(mapper: IterationCallback<Numeric, T> = identity): Fn<Maybe<T>, readonly T[]> {
	return converge<T, Numeric>((a, b) => b.valueOf() - a.valueOf(), mapper);
}

export function maximize(): Fn<Maybe<Numeric>, readonly Numeric[]>;
export function maximize<T>(mapper: IterationCallback<Numeric, T>): Fn<Maybe<T>, readonly T[]>;
export function maximize<T>(mapper: IterationCallback<Numeric, T> = identity): Fn<Maybe<T>, readonly T[]> {
	return converge<T, Numeric>((a, b) => a.valueOf() - b.valueOf(), mapper);
}
