import type {Fn, IterationCallback, IterationResult, MyIterator} from '../types';
import {funnel} from '../function';
import {not} from '../bool';
import {identity} from '../misc';
import {backwardIterator, forwardIterator, reversedIterator} from './utils';
import {push} from './push';
import {unshift} from './unshift';

function dropFactory<T>(
	iterator: Fn<MyIterator<T>, ReadonlyArray<T>>,
	mutator: Fn<Fn<T[], ReadonlyArray<any>>, T> = push,
	predicateModifier: Fn<boolean> = not,
): Fn<Fn<T[], ReadonlyArray<T>>, IterationCallback<boolean, T>> {
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

export const dropWhile = dropFactory(forwardIterator);
export const dropRightWhile = dropFactory(backwardIterator, unshift);
export const dropWhileReversed = dropFactory(reversedIterator, unshift);
export const dropUntil = dropFactory(forwardIterator, undefined, identity);
export const dropRightUntil = dropFactory(backwardIterator, unshift, identity);
export const dropUntilReversed = dropFactory(reversedIterator, unshift, identity);
