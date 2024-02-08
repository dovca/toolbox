import type {Fn, FnT3, IterationResult, MyIterator} from '../types/types';
import {backwardIterator, reversedIterator, forwardIterator} from './utils/iterators';

function findIndexFactory<T>(generator: Fn<ReadonlyArray<T>, MyIterator<T>>): Fn<FnT3<IterationResult<T>, boolean>, Fn<ReadonlyArray<T>, number>> {
	return (matcher) => (values) => {
		for (const [value, index, array] of generator(values)) {
			if (matcher(value, index, array)) {
				return index;
			}
		}
		return -1;
	}
}

export const findIndex = findIndexFactory(forwardIterator);

export const findLastIndex = findIndexFactory(backwardIterator);

export const findIndexReversed = findIndexFactory(reversedIterator);
