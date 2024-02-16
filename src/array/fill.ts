import type {Fn} from '../types';

/**
 * Fills a flowing array with a specific value.
 * @param value The value to fill the array with.
 * @param start The start index to fill the array from. Defaults to 0.
 * @param end The end index to fill the array to. Defaults to -1.
 * @returns Produces a new array with some positions filled with the given value.
 */
export function fill<T>(value: T, start?: number, end?: number): Fn<T[], ReadonlyArray<T>> {
	return (array) => array.slice().fill(value, start, end);
}
