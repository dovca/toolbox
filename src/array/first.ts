import type {AnyArray, First} from '../types';

/**
 * Returns the first element of an array. If the array is empty, undefined is returned.
 * @param arr The array to get the first element of.
 * @returns The first element of the array, or undefined if the array is empty.
 * @example
 * ```typescript
 * first([1, 2, 3]); // 1 typed as (number | undefined)
 * ```
 */
export function first<T extends AnyArray>(arr: T): First<T> | undefined {
	return arr[0];
}

/**
 * Works the same as `first`, but with a type assertion to make the return value non-nullable.
 * Be aware that this function will still return undefined if the array is empty.
 * @param arr The array to get the first element of.
 * @returns The first element of the array.
 * @example
 * ```typescript
 * firstLoose([1, 2, 3]); // 1 typed as number
 * ```
 */
export const firstLoose = first as <T extends AnyArray>(arr: T) => First<T>;
