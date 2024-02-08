import type {Fn, FnT3, IterationResult, MyIterator} from '../types/types';
import {backwardIterator, reversedIterator, forwardIterator} from './utils/iterators';

function findFactory<T>(generator: Fn<ReadonlyArray<T>, MyIterator<T>>): Fn<FnT3<IterationResult<T>, boolean>, Fn<ReadonlyArray<T>, T | undefined>> {
	return (matcher) => (values) => {
		for (const [value, ...rest] of generator(values)) {
			if (matcher(value, ...rest)) {
				return value;
			}
		}
	};
}

export const find = findFactory(forwardIterator);

export const findLast = findFactory(backwardIterator);

export const findReversed = findFactory(reversedIterator);
