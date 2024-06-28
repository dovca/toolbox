import type {Fn} from '../types/utils';

/**
 * Fills a flowing array with a specific value.
 * @param value The value to fill the array with.
 * @param start The start index to fill the array from. Defaults to 0.
 * @param end The end index to fill the array to (excluding). Defaults to -1.
 * @returns Produces a new array with some positions filled with the given value.
 * @example
 * ```typescript
 * fill(0)([1, 2, 3]); // [0, 0, 0]
 * fill(0, 1, 3)([1, 2, 3, 4, 5]); // [1, 0, 0, 4, 5]
 * ```
 */
export function fill<T>(value: T, start?: number, end?: number): Fn<T[], readonly T[]> {
	return (array) => array.slice().fill(value, start, end);
}
