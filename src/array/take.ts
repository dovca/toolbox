import type {Fn, IterationCallback, IterationResult, MyIterator} from '../types';
import {funnel} from '../function';
import {not} from '../boolean';
import {identity} from '../misc';
import {backwardIterator, forwardIterator, reversedIterator} from './utils';
import {push} from './push';
import {unshift} from './unshift';

function takeFactory<T>(
	iterator: Fn<MyIterator<T>, ReadonlyArray<T>>,
	mutator: Fn<Fn<T[], ReadonlyArray<any>>, T> = push,
	predicateModifier: Fn<boolean> = identity,
): Fn<Fn<T[], ReadonlyArray<T>>, IterationCallback<boolean, T>> {
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

export const takeWhile = takeFactory(forwardIterator);
export const takeRightWhile = takeFactory(backwardIterator, unshift);
export const takeWhileReversed = takeFactory(reversedIterator);
export const takeUntil = takeFactory(forwardIterator, undefined, not);
export const takeRightUntil = takeFactory(backwardIterator, unshift, not);
export const takeUntilReversed = takeFactory(reversedIterator, undefined, not);
