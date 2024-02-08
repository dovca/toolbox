import type {Fn, IndexedPredicate} from '../types/types';
import {forwardIterator} from './utils/iterators';

export function filter<I, O extends I = I>(predicate: IndexedPredicate<I>): Fn<ReadonlyArray<I>, O[]>;
export function filter<T>(predicate: IndexedPredicate<T>): Fn<ReadonlyArray<T>, T[]> {
	return (values) => {
		const result: T[] = [];
		for (const [value, index] of forwardIterator(values)) {
			if (predicate(value, index)) {
				result.push(value);
			}
		}
		return result;
	};
}
