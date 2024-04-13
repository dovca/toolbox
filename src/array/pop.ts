import type {Fn} from '../types';

/**
 * Returns a new array with the last N values removed.
 * @param count The number of values to remove from the end of the array. Defaults to 1.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * pop(2)([1, 2, 3, 4, 5]); // [1, 2, 3]
 * ```
 */
export function pop<T>(count = 1): Fn<T[], readonly T[]> {
	return (values) => values.slice(0, -count);
}
