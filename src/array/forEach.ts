import type {Fn, IterationCallback, MyIterator} from '../types/types';
import {forwardIterator, reversedIterator} from './utils/iterators';

function forEachFactory<T>(generator: Fn<MyIterator<T>, ReadonlyArray<T>>): Fn<Fn<ReadonlyArray<T>>, IterationCallback<void, T>>;
function forEachFactory<T>(generator: Fn<MyIterator<T>, ReadonlyArray<T>>): Fn<Fn<T[] | ReadonlyArray<T>>, IterationCallback<void, T>> {
	return (callback) => (values) => {
		for (const result of generator(values)) {
			callback(...result);
		}
		return values;
	}
}

export const forEach = forEachFactory(forwardIterator);

export const forEachReversed = forEachFactory(reversedIterator);
