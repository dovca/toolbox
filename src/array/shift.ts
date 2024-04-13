import type {Fn} from '../types';

/**
 * Returns a new array with the first `count` values removed.
 * @param count The number of values to remove from the beginning of the array. Defaults to 1.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * shift(2)([1, 2, 3, 4, 5]); // [3, 4, 5]
 * ```
 */
export function shift<T>(count = 1): Fn<T[], readonly T[]> {
	return (values) => values.slice(count);
}
