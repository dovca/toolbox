import type {Fn, IndexedPredicate} from '../types/types';
import {forwardIterator} from './utils/iterators';

export function filter<I, O extends I = I>(predicate: IndexedPredicate<I>): Fn<O[], ReadonlyArray<I>>;
export function filter<T>(predicate: IndexedPredicate<T>): Fn<T[], ReadonlyArray<T>> {
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
