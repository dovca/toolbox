import type {Fn, IterationCallback} from '../types';
import {not} from '../bool';
import {funnel} from '../function/funnel';

/**
 * Rejects values of a flowing array based on a predicate.
 * @param predicate The predicate to reject the values with.
 * @returns Produces a new array of values that fail the predicate.
 */
export function reject<T>(predicate: IterationCallback<boolean, T>): Fn<T[], ReadonlyArray<T>> {
	return (values) => values.filter(funnel(predicate, not));
}
