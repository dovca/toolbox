import type {Comparator, Fn} from '../types';
import {ascending} from '../misc';

/**
 * Sorts the flowing array.
 * @param comparator A function that defines the sort order.
 * @returns Produces a new sorted array.
 */
export function sort<T extends string | number>(): Fn<T[], readonly T[]>;
export function sort<T>(comparator: Comparator<T, number>): Fn<T[], readonly T[]>;
export function sort<T>(comparator: Comparator<T, number> = ascending<any>()): Fn<T[], readonly T[]> {
	return (values) => values.slice().sort(comparator);
}
