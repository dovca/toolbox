import type {Fn} from '../types';
import {modulo} from '../number';
import {isValidIndex} from '../predicate';

/**
 * Produces the value at the given index of the flowing array.
 * @param index The index of the value to return. can be negative, in which case it will count from the end of the
 * array, -1 being the last index.
 * @returns Produces the value at the given index, or undefined if the index is out of bounds.
 * @example
 * ```typescript
 * at(1)([1, 2, 3]); // 2
 * at(-1)([1, 2, 3]); // 3
 * ```
 */
export function at<T>(index: number): Fn<T, readonly T[]>;
export function at<T extends undefined>(index: number): Fn<T | undefined, readonly T[]>;
export function at<T>(index: number): Fn<T | undefined, readonly T[]> {
	return (values) => isValidIndex(index)(values)
		? values[modulo(values.length)(index)]
		: undefined;
}
