import type {Fn} from '../types';

/**
 * Splits a flowing array into two arrays at a specific position.
 * @param position The position to split the array at.
 * @returns Produces a couple of arrays that made up the original arrays.
 * @example
 * ```typescript
 * cut(2)([1, 2, 3, 4, 5]); // [[1, 2], [3, 4, 5]]
 * ```
 */
export function cut<T>(position: number): Fn<[T[], T[]], readonly T[]> {
	return (values) => [values.slice(0, position), values.slice(position)];
}
