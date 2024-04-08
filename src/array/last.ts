import type {Last} from '../types';

/**
 * Returns the last element of an array.
 * @param input The array to get the last element of.
 * @returns The last element of the array, or undefined if the array is empty.
 */
export function last<T extends readonly any[]>(input: T): Last<T> | undefined {
	return input[input.length - 1];
}

export const lastLoose = last as <T extends readonly any[]>(input: T) => Last<T>;
