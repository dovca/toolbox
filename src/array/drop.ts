import type {AnyArray, Fn, IterationCallback, IterationResult, MyGeneratorFunction} from '../types';
import {funnel} from '../function';
import {not} from '../boolean';
import {identity} from '../misc';
import {backwardIterator, forwardIterator, reversedIterator} from '../iterators';
import {push} from './push';
import {unshift} from './unshift';

function dropFactory<T>(
	iterator: MyGeneratorFunction<T>,
	mutator: Fn<Fn<T[], AnyArray>, T> = push,
	predicateModifier: Fn<boolean> = not,
): Fn<Fn<T[], readonly T[]>, IterationCallback<boolean, T>> {
	return (predicate) => {
		const finalPredicate = funnel<IterationResult<T>, boolean, boolean>(predicate, predicateModifier);

		return (values) => {
			let keepRest = false;
			let result: T[] = [];
			for (const [value, index, array] of iterator(values)) {
				if (keepRest ||= finalPredicate(value, index, array)) {
					result = mutator(value)(result);
				}
			}
			return result;
		};
	};
}

/**
 * Removes values from the beginning of a flowing array until the predicate returns false.
 * @returns Produces the remaining values.
 * @example
 * ```typescript
 * dropWhile(isLessThan(3))([1, 2, 3, 4, 5]); // [3, 4, 5]
 * ```
 */
export const dropWhile = dropFactory(forwardIterator);

/**
 * Removes elements from the end of a flowing array until the predicate returns false.
 * The index passed to the predicate is the real index of the element.
 * @returns Produces the remaining values.
 * @example
 * ```typescript
 * dropRightWhile(isGreaterThan(3))([1, 2, 3, 4, 5]); // [1, 2, 3]
 * ```
 */
export const dropRightWhile = dropFactory(backwardIterator, unshift);

/**
 * Removes elements from the end of a flowing array until the predicate returns false.
 * The index passed to the predicate counts from the end.
 * @returns Produces the remaining values.
 * @example
 * ```typescript
 * dropWhileReversed(isGreaterThan(3))([1, 2, 3, 4, 5]); // [1, 2, 3]
 * ```
 */
export const dropWhileReversed = dropFactory(reversedIterator, unshift);

/**
 * Removes elements from the beginning of a flowing array until the predicate returns true.
 * @returns Produces the remaining values.
 * @example
 * ```typescript
 * dropUntil(isGreaterThan(3))([1, 2, 3, 4, 5]); // [4, 5]
 * ```
 */
export const dropUntil = dropFactory(forwardIterator, undefined, identity);

/**
 * Removes elements from the end of a flowing array until the predicate returns true.
 * The index passed to the predicate is the real index of the element.
 * @returns Produces the remaining values.
 * @example
 * ```typescript
 * dropRightUntil(isLessThan(3))([1, 2, 3, 4, 5]); // [1, 2]
 * ```
 */
export const dropRightUntil = dropFactory(backwardIterator, unshift, identity);

/**
 * Removes elements from the end of a flowing array until the predicate returns true.
 * The index passed to the predicate counts from the end.
 * @returns Produces the remaining values.
 * @example
 * ```typescript
 * dropUntilReversed(isLessThan(3))([1, 2, 3, 4, 5]); // [1, 2]
 * ```
 */
export const dropUntilReversed = dropFactory(reversedIterator, unshift, identity);
