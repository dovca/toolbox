import type {AnyArray, Fn, IterationCallback, IterationResult, MyGeneratorFunction} from '../types/utils';
import {funnel} from '../function/funnel';
import {not} from '../boolean/logic';
import {identity} from '../misc/identity';
import {backwardIterator} from '../iterators/backward';
import {forwardIterator} from '../iterators/forward';
import {reversedIterator} from '../iterators/reversed';
import {push} from './push';
import {unshift} from './unshift';

type Take = <T>(callback: IterationCallback<boolean, T>) => Fn<T[], readonly T[]>;

function takeFactory<T>(
	iterator: MyGeneratorFunction<T>,
	mutator: Fn<Fn<T[], AnyArray>, T> = push,
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
 * @param predicate The function to test each value with.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * takeWhile(isLessThan(3))([1, 2, 3, 4]); // [1, 2]
 * ```
 */
export const takeWhile: Take = takeFactory(forwardIterator);

/**
 * Takes values from the end of the array while the predicate returns true. All other values are discarded.
 * The index passed to the predicate is the real index of the value.
 * @param predicate The function to test each value with.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * takeRightWhile(isGreaterThan(2))([1, 2, 3, 4]); // [3, 4]
 * ```
 */
export const takeRightWhile: Take = takeFactory(backwardIterator, unshift);

/**
 * Takes values from the end of the array while the predicate returns true. All other values are discarded.
 * The index passed to the predicate counts from the end of the array.
 * @param predicate The function to test each value with.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * takeWhileReversed(isGreaterThan(2))([1, 2, 3, 4]); // [3, 4]
 * ```
 */
export const takeWhileReversed: Take = takeFactory(reversedIterator);

/**
 * Takes values from the beginning of the array until the predicate returns true. All other values are discarded.
 * @param predicate The function to test each value with.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * takeUntil(isGreaterThan(2))([1, 2, 3, 4]); // [1, 2]
 * ```
 */
export const takeUntil: Take = takeFactory(forwardIterator, undefined, not);

/**
 * Takes values from the end of the array until the predicate returns true. All other values are discarded.
 * The index passed to the predicate is the real index of the value.
 * @param predicate The function to test each value with.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * takeRightUntil(isLessThan(3))([1, 2, 3, 4]); // [3, 4]
 * ```
 */
export const takeRightUntil: Take = takeFactory(backwardIterator, unshift, not);

/**
 * Takes values from the end of the array until the predicate returns true. All other values are discarded.
 * The index passed to the predicate counts from the end of the array.
 * @param predicate The function to test each value with.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * takeUntilReversed(isLessThan(3))([1, 2, 3, 4]); // [3, 4]
 * ```
 */
export const takeUntilReversed: Take = takeFactory(reversedIterator, undefined, not);
