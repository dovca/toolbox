import type {AnyArray, Last} from '../types';

/**
 * Returns the last element of an array. If the array is empty, undefined is returned.
 * @param array The array to get the last element of.
 * @returns The last element of the array, or undefined if the array is empty.
 * @example
 * ```typescript
 * last([1, 2, 3]); // 3 typed as (number | undefined)
 * ```
 */
export function last<T extends AnyArray>(array: T): Last<T> | undefined {
	return array[array.length - 1];
}

/**
 * Works the same as `last`, but with a type assertion to make the return value non-nullable.
 * Be aware that this function will still return undefined if the array is empty.
 * @param array The array to get the last element of.
 * @returns The last element of the array.
 * @example
 * ```typescript
 * lastLoose([1, 2, 3]); // 3 typed as number
 * ```
 */
export const lastLoose = last as <T extends AnyArray>(array: T) => Last<T>;
