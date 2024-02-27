import type {Fn, IterationCallback} from '../types';
import {funnel} from '../function';
import {not} from '../boolean';
import {isOneOf} from '../predicate';

/**
 * Removes values of a flowing array based on a predicate.
 * @param predicate The predicate to remove the values with.
 * @returns Produces a new array without values that pass the predicate.
 */
export function removeWith<T>(predicate: IterationCallback<boolean, T>): Fn<T[], readonly T[]> {
	const filter = funnel(predicate, not);
	return (values) => values.filter(filter);
}

/**
 * Removes values of a flowing array based on value equality.
 * @param values The values to remove from the array.
 * @returns Produces a new array of the original values without the provided values.
 */
export function removeAll<T>(...values: readonly T[]): Fn<T[], readonly T[]> {
	return removeWith(isOneOf(...values));
}
