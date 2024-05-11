import type {AnyArray, Shift} from '../types';

type Shifter<N extends number> = <T extends AnyArray>(input: T) => Shift<T, N>;

/**
 * Returns a new array with the first `count` values removed.
 * @param count The number of values to remove from the beginning of the array. Defaults to 1.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * shift(2)([1, 2, 3, 4, 5]); // [3, 4, 5]
 * ```
 */
export function shift<N extends number>(count?: N): Shifter<N> {
	return (values) => values.slice(count ?? 1) as Shift<typeof values, N>;
}
