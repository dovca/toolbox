import type {Maybe} from '../types';

/**
 * Returns the last element of an array.
 * @param input The array to get the last element of.
 * @returns The last element of the array, or undefined if the array is empty.
 */
export function last<T>(input: readonly T[]): Maybe<T> {
	return input[input.length - 1];
}
