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

/**
 * Finds the first value in the flowing array that passes the given predicate.
 * @param matcher The predicate to check.
 * @returns Produces the first value that passes the predicate.
 */
export const find = findFactory(forwardIterator);

/**
 * Finds the last value in the flowing array that passes the given predicate.
 * @param matcher The predicate to check. The second parameter is the index of the value.
 * @returns Produces the last value that passes the predicate.
 */
export const findLast = findFactory(backwardIterator);

/**
 * Finds the first value in the flowing array that passes the given predicate.
 * @param matcher The predicate to check. The second parameter is the index of the value, counting from the end.
 * @returns Produces the first value that passes the predicate.
 */
export const findReversed = findFactory(reversedIterator);
