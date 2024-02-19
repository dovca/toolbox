import type {Fn, Predicate, T2} from '../types';
import {groupBy} from './groupBy';
import {pipe} from '../function';
import {toString} from '../convert';

/**
 * Partitions a flowing array into two arrays based on a predicate. The first array contains all elements that pass the
 * predicate, and the second array contains all elements that do not.
 * @param predicate The predicate to test each element against.
 */
export function partition<T>(predicate: Predicate<T>): Fn<T2<T[]>, T[]> {
	return (array) => {
		const grouped = groupBy(pipe(predicate, toString))(array);
		return [grouped.true ?? [], grouped.false ?? []];
	};
}
