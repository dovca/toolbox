import type {Fn, IterationCallback, IterationResult, MyIterator} from '../types';
import {funnel} from '../function';
import {not} from '../boolean';
import {identity} from '../misc';
import {backwardIterator, forwardIterator, reversedIterator} from './utils';
import {push} from './push';
import {unshift} from './unshift';

function takeFactory<T>(
	iterator: Fn<MyIterator<T>, readonly T[]>,
	mutator: Fn<Fn<T[], readonly any[]>, T> = push,
	predicateModifier: Fn<boolean> = identity,
): Fn<Fn<T[], readonly T[]>, IterationCallback<boolean, T>> {
	return (predicate) => {
		const finalPredicate = funnel<IterationResult<T>, boolean, boolean>(predicate, predicateModifier);

		return (values) => {
			let result: T[] = [];
			for (const [value, index, array] of iterator(values)) {
				if (finalPredicate(value, index, array)) {
					result = mutator(value)(result);
				} else {
					break;
				}
			}
			return result;
		};
	};
}

/**
 * Takes values from the beginning of the array while the predicate returns true. All other values are discarded.
 */
export const takeWhile = takeFactory(forwardIterator);

/**
 * Takes values from the end of the array while the predicate returns true. All other values are discarded.
 * The index passed to the predicate is the real index of the value.
 */
export const takeRightWhile = takeFactory(backwardIterator, unshift);

/**
 * Takes values from the end of the array while the predicate returns true. All other values are discarded.
 * The index passed to the predicate counts from the end of the array.
 */
export const takeWhileReversed = takeFactory(reversedIterator);

/**
 * Takes values from the beginning of the array until the predicate returns true. All other values are discarded.
 */
export const takeUntil = takeFactory(forwardIterator, undefined, not);

/**
 * Takes values from the end of the array until the predicate returns true. All other values are discarded.
 * The index passed to the predicate is the real index of the value.
 */
export const takeRightUntil = takeFactory(backwardIterator, unshift, not);

/**
 * Takes values from the end of the array until the predicate returns true. All other values are discarded.
 * The index passed to the predicate counts from the end of the array.
 */
export const takeUntilReversed = takeFactory(reversedIterator, undefined, not);
