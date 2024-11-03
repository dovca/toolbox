import {identity} from '../misc/identity';
import type {Numeric, Fn, Maybe, Sorter, IterationCallback} from '../types/utils';
import {forwardIterator} from '../iterators/forward';

/**
 * Maps each flowing value with `mapper` and sorts the results with `comparator`. The function then returns the original
 * flowing value corresponding to the first mapped value.
 * @param comparator Function to compare mapped values with.
 * @param mapper Function that maps the flowing values.
 * @returns Produces one of the flowing values
 * @example
 * ```typescript
 * converge<string, number>((s) => Number(s), (a, b) => b - a)(['20', '0xA', '333']) // -> '0xA'
 * ```
 */
export function converge<Input, Mapped = Input>(
	mapper: IterationCallback<Mapped, Input>,
	comparator: Sorter<Mapped>,
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

/**
 * Produces the smallest flowing numeric value.
 * @returns Produces one of the flowing values
 * @example
 * ```typescript
 * minimize()([3, 5, 2, 1, 6, 4]) // -> 1
 * ```
 */
export function minimize(): Fn<Maybe<Numeric>, readonly Numeric[]>;
/**
 * Produces the value which maps to the smallest number.
 * If multiple values map to the same number, the first one is returned.
 * @returns Produces one of the flowing values
 * @example
 * ```typescript
 * minimize((s: string) => s.length)(['hello', 'FOO', 'World', 'bar']) // -> 'FOO'
 * ```
 */
export function minimize<T>(mapper: IterationCallback<Numeric, T>): Fn<Maybe<T>, readonly T[]>;
export function minimize<T>(mapper: IterationCallback<Numeric, T> = identity): Fn<Maybe<T>, readonly T[]> {
	return converge<T, Numeric>(mapper, (a, b) => b.valueOf() - a.valueOf());
}

/**
 * Produces the largest flowing numeric value.
 * @returns Produces one of the flowing values
 * @example
 * ```typescript
 * maximize()([3, 5, 2, 1, 6, 4]) // -> 6
 * ```
 */
export function maximize(): Fn<Maybe<Numeric>, readonly Numeric[]>;
/**
 * Produces the value which maps to the largest number.
 * If multiple values map to the same number, the first one is returned.
 * @returns Produces one of the flowing values
 * @example
 * ```typescript
 * maximize((s: string) => s.length)(['hello', 'FOO', 'World', 'bar']) // -> 'hello'
 * ```
 */
export function maximize<T>(mapper: IterationCallback<Numeric, T>): Fn<Maybe<T>, readonly T[]>;
export function maximize<T>(mapper: IterationCallback<Numeric, T> = identity): Fn<Maybe<T>, readonly T[]> {
	return converge<T, Numeric>(mapper, (a, b) => a.valueOf() - b.valueOf());
}
