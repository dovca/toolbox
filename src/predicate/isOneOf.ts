import type {Predicate} from '../types';
import {forwardIterator} from '../array/utils/iterators';

export function isOneOf<T>(values: T[]): Predicate<T> {
	return (searchValue) => {
		for (const [value] of forwardIterator(values)) {
			if (value === searchValue) {
				return true;
			}
		}
		return false;
	}
}
