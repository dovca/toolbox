import type {First} from '../types';

/**
 * Returns the first element of an array. If the array is empty, undefined is returned.
 * @param arr The array to get the first element of.
 * @returns The first element of the array, or undefined if the array is empty.
 */
export function first<T extends readonly any[]>(arr: T): First<T> | undefined {
	return arr[0];
}

export const firstLoose = first as <T extends readonly any[]>(arr: T) => First<T>;
