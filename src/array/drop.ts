import type {Fn, IterationCallback, IterationResult, MyIterator} from '../types';
import {funnel} from '../function';
import {not} from '../boolean';
import {identity} from '../misc';
import {backwardIterator, forwardIterator, reversedIterator} from './utils';
import {push} from './push';
import {unshift} from './unshift';

function dropFactory<T>(
	iterator: Fn<MyIterator<T>, readonly T[]>,
	mutator: Fn<Fn<T[], readonly any[]>, T> = push,
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
 * Removes elements from the beginning of a flowing array until the predicate returns false.
 */
export const dropWhile = dropFactory(forwardIterator);

/**
 * Removes elements from the end of a flowing array until the predicate returns false.
 * The index passed to the predicate is the real index of the element.
 */
export const dropRightWhile = dropFactory(backwardIterator, unshift);

/**
 * Removes elements from the end of a flowing array until the predicate returns false.
 * The index passed to the predicate counts from the end.
 */
export const dropWhileReversed = dropFactory(reversedIterator, unshift);

/**
 * Removes elements from the beginning of a flowing array until the predicate returns true.
 */
export const dropUntil = dropFactory(forwardIterator, undefined, identity);

/**
 * Removes elements from the end of a flowing array until the predicate returns true.
 * The index passed to the predicate is the real index of the element.
 */
export const dropRightUntil = dropFactory(backwardIterator, unshift, identity);

/**
 * Removes elements from the end of a flowing array until the predicate returns true.
 * The index passed to the predicate counts from the end.
 */
export const dropUntilReversed = dropFactory(reversedIterator, unshift, identity);
