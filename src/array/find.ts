import type {Fn, FnT3, IterationResult, Maybe, MyGeneratorFunction} from '../types';
import {backwardIterator, reversedIterator, forwardIterator} from '../iterators';

function findFactory<T>(generator: MyGeneratorFunction<T>): Fn<Fn<Maybe<T>, readonly T[]>, FnT3<boolean, IterationResult<T>>> {
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
 * @example
 * ```typescript
 * find(isOdd)([2, 3, 4, 5, 6]); // 3
 * ```
 */
export const find = findFactory(forwardIterator);

/**
 * Finds the last value in the flowing array that passes the given predicate.
 * @param matcher The predicate to check. The second parameter is the index of the value.
 * @returns Produces the last value that passes the predicate.
 * @example
 * ```typescript
 * findLast(isOdd)([2, 3, 4, 5, 6]); // 5
 * ```
 */
export const findLast = findFactory(backwardIterator);

/**
 * Finds the first value in the flowing array that passes the given predicate.
 * @param matcher The predicate to check. The second parameter is the index of the value, counting from the end.
 * @returns Produces the first value that passes the predicate.
 * @example
 * ```typescript
 * findReversed(isOdd)([2, 3, 4, 5, 6]); // 5
 * ```
 */
export const findReversed = findFactory(reversedIterator);
