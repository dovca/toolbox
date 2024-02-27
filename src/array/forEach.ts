import type {Fn, IterationCallback, MyIterator} from '../types';
import {forwardIterator, reversedIterator} from './utils';

function forEachFactory<T>(generator: Fn<MyIterator<T>, readonly T[]>): Fn<Fn<readonly T[]>, IterationCallback<void, T>>;
function forEachFactory<T>(generator: Fn<MyIterator<T>, readonly T[]>): Fn<Fn<T[] | readonly T[]>, IterationCallback<void, T>> {
	return (callback) => (values) => {
		for (const result of generator(values)) {
			callback(...result);
		}
		return values;
	}
}

/**
 * Iterates over the flowing array, calling a callback for each value.
 * @param callback The callback to call for each value.
 * @returns Produces the original array.
 */
export const forEach = forEachFactory(forwardIterator);

/**
 * Iterates over the flowing array in reverse, calling a callback for each value.
 * @param callback The callback to call for each value.
 * @returns Produces the original array.
 */
export const forEachReversed = forEachFactory(reversedIterator);
