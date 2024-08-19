import type {Fn, FnT3, IterationResult, ToolboxGeneratorFunction} from '../types/utils';
import {backwardIterator} from '../iterators/backward';
import {forwardIterator} from '../iterators/forward';
import {reversedIterator} from '../iterators/reversed';

type FindIndexFn = <T>(matcher: FnT3<boolean, IterationResult<T>>) => Fn<number, readonly T[]>;

function findIndexFactory<T>(generator: ToolboxGeneratorFunction<T>): Fn<Fn<number, readonly T[]>, FnT3<boolean, IterationResult<T>>> {
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
export const findIndex: FindIndexFn = findIndexFactory(forwardIterator);

/**
 * Finds the index of the last value in the flowing array that passes the given predicate.
 * @param matcher The predicate to check. The second parameter is the index of the value.
 * @returns Produces the index of the last value that passes the predicate.
 * @example
 * ```typescript
 * findLastIndex(isOdd)([2, 3, 4, 5, 6]); // 3
 * ```
 */
export const findLastIndex: FindIndexFn = findIndexFactory(backwardIterator);

/**
 * Finds the index of the first value in the flowing array that passes the given predicate.
 * @param matcher The predicate to check. The second parameter is the index of the value, counting from the end.
 * @returns Produces the index of the first value that passes the predicate.
 * @example
 * ```typescript
 * findIndexReversed(isOdd)([2, 3, 4, 5, 6]); // 3
 * ```
 */
export const findIndexReversed: FindIndexFn = findIndexFactory(reversedIterator);
