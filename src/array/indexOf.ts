import type {Fn, MyIterator} from '../types/types';
import {backwardIterator, forwardIterator} from './utils/iterators';

function indexOfFactory<T>(generator: Fn<ReadonlyArray<T>, MyIterator<T>>): Fn<T, Fn<ReadonlyArray<T>, number>> {
	return (searchValue) => (values) => {
		for (const [value, index] of generator(values)) {
			if (value === searchValue) {
				return index;
			}
		}
		return -1;
	}
}

export const indexOf = indexOfFactory(forwardIterator);

export const lastIndexOf = indexOfFactory(backwardIterator);
