import type {Predicate} from '../types/types';
import {forwardIterator} from './utils/iterators';

export function includes<T>(item: T): Predicate<ReadonlyArray<T>> {
	return (values) => {
		for (const [value] of forwardIterator(values)) {
			if (value === item) {
				return true;
			}
		}
		return false;
	}
}
