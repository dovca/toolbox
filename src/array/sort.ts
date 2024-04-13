import type {Comparator, Fn} from '../types';
import {ascending} from '../misc';

/**
 * Sorts the flowing array of strings or numbers.
 * @returns Produces a new sorted array.
 * @example
 * ```typescript
 * sort()([3, 1, 2]); // [1, 2, 3]
 * sort()(['c', 'a', 'b', 'aa']); // ['a', 'aa', 'b', 'c']
 * ```
 */
export function sort<T extends string | number>(): Fn<T[], readonly T[]>;

/**
 * Sorts the flowing array.
 * @param comparator A function that defines the sort order.
 * @returns Produces a new sorted array.
 * @example
 * ```typescript
 * sort(ascending)([3, 1, 2]); // [1, 2, 3]
 * sort(descending)([3, 1, 2]); // [3, 2, 1]
 * ```
 */
export function sort<T>(comparator: Comparator<T, number>): Fn<T[], readonly T[]>;

export function sort<T>(comparator: Comparator<T, number> = ascending<any>()): Fn<T[], readonly T[]> {
	return (values) => values.slice().sort(comparator);
}
