import type {Fn, FnT3, IterationResult, MyGeneratorFunction} from '../types';
import {backwardIterator, reversedIterator, forwardIterator} from '../iterators';

function findIndexFactory<T>(generator: MyGeneratorFunction<T>): Fn<Fn<number, readonly T[]>, FnT3<boolean, IterationResult<T>>> {
	return (matcher) => (values) => {
		for (const [value, index, array] of generator(values)) {
			if (matcher(value, index, array)) {
				return index;
			}
		}
		return -1;
	}
}

/**
 * Finds the index of the first value in the flowing array that passes the given predicate.
 * @param matcher The predicate to check.
 * @returns Produces the index of the first value that passes the predicate.
 * @example
 * ```typescript
 * findIndex(isOdd)([2, 3, 4, 5, 6]); // 1
 * ```
 */
export const findIndex = findIndexFactory(forwardIterator);

/**
 * Finds the index of the last value in the flowing array that passes the given predicate.
 * @param matcher The predicate to check. The second parameter is the index of the value.
 * @returns Produces the index of the last value that passes the predicate.
 * @example
 * ```typescript
 * findLastIndex(isOdd)([2, 3, 4, 5, 6]); // 3
 * ```
 */
export const findLastIndex = findIndexFactory(backwardIterator);

/**
 * Finds the index of the first value in the flowing array that passes the given predicate.
 * @param matcher The predicate to check. The second parameter is the index of the value, counting from the end.
 * @returns Produces the index of the first value that passes the predicate.
 * @example
 * ```typescript
 * findIndexReversed(isOdd)([2, 3, 4, 5, 6]); // 3
 * ```
 */
export const findIndexReversed = findIndexFactory(reversedIterator);
