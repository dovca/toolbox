import type {Fn, Predicate, T2} from '../types/utils';
import {groupWith} from './group';
import {pipe} from '../function/pipe';
import {toString} from '../convert/toString';

/**
 * Partitions a flowing array into two arrays based on a predicate. The first array contains all elements that pass the
 * predicate, and the second array contains all elements that do not.
 * @param predicate The predicate to test each element against.
 * @returns Produces a tuple of two arrays.
 * @example
 * ```typescript
 * partition(isOdd)([1, 2, 3, 4]); // [[1, 3], [2, 4]]
 * ```
 */
export function partition<T>(predicate: Predicate<T>): Fn<T2<T[]>, readonly T[]> {
	return (array) => {
		const grouped = groupWith(pipe(predicate, toString))(array);
		return [grouped.true ?? [], grouped.false ?? []];
	};
}
