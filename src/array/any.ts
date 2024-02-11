import type {Predicate} from '../types/types';
import {forwardIterator} from './utils/iterators';

export function any<T>(...predicates: Predicate<T>[]): Predicate<T> {
	return (value) => {
		for (const [predicate] of forwardIterator(predicates)) {
			if (predicate(value)) {
				return true;
			}
		}
		return false;
	};
}
