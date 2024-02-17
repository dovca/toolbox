import type {Fn, IterationCallback} from '../types';
import {funnel} from '../function';
import {not} from '../boolean';
import {isOneOf} from '../predicate';

/**
 * Rejects values of a flowing array based on a predicate.
 * @param predicate The predicate to reject the values with.
 * @returns Produces a new array of values that fail the predicate.
 */
export function removeWith<T>(predicate: IterationCallback<boolean, T>): Fn<T[], ReadonlyArray<T>> {
	const filter = funnel(predicate, not);
	return (values) => values.filter(filter);
}

export function removeAll<T>(...values: ReadonlyArray<T>): Fn<T[], ReadonlyArray<T>> {
	return removeWith(isOneOf(...values));
}
