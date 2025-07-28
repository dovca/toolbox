import type {Fn} from '../types/utils';

/**
 * Creates a new array with elements from the flowing array that are present in the given values.
 * The comparison is done using SameValueZero.
 * @param values Values to keep in the array.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * keep(2, 3, 5)([1, 2, 3, 4]); // [2, 3]
 * ```
 */
export function keep<T>(...values: readonly T[]): Fn<T[], readonly T[]> {
	return (arr) => arr.filter((val) => values.includes(val));
}
