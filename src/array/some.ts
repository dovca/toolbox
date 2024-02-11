import type {IndexedPredicate, Predicate} from '../types';
import {forwardIterator} from './utils/iterators';

export function some<T>(predicate: IndexedPredicate<T>): Predicate<ReadonlyArray<T>> {
	return (values) => {
		for (const [value, index] of forwardIterator(values)) {
			if (predicate(value, index)) {
				return true;
			}
		}
		return false;
	}
}
