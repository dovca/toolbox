import type {Fn, FnT3, IterationResult, MyIterator} from '../types';
import {backwardIterator, reversedIterator, forwardIterator} from './utils/iterators';

function findFactory<T>(generator: Fn<MyIterator<T>, ReadonlyArray<T>>): Fn<Fn<T | undefined, ReadonlyArray<T>>, FnT3<boolean, IterationResult<T>>> {
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
