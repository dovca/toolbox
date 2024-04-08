import type {Comparator, Fn} from '../types';

/**
 * Sorts the flowing array.
 * @param comparator A function that defines the sort order.
 * @returns Produces a new sorted array.
 */
export function sort<T>(comparator: Comparator<T, number>): Fn<T[], readonly T[]> {
	return (values) => values.slice().sort(comparator);
}
