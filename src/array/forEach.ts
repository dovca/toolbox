import type {Fn, IterationCallback, MyIterator} from '../types/types';
import {forwardIterator, reversedIterator} from './utils/iterators';

function forEachFactory<T>(generator: Fn<ReadonlyArray<T>, MyIterator<T>>): Fn<IterationCallback<T, void>, Fn<ReadonlyArray<T>>>;
function forEachFactory<T>(generator: Fn<ReadonlyArray<T>, MyIterator<T>>): Fn<IterationCallback<T, void>, Fn<T[] | ReadonlyArray<T>>> {
	return (callback) => (values) => {
		for (const result of generator(values)) {
			callback(...result);
		}
		return values;
	}
}

export const forEach = forEachFactory(forwardIterator);

export const forEachReversed = forEachFactory(reversedIterator);
