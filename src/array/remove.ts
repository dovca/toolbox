import type {Fn, IterationCallback} from '../types';
import {filter} from './filter';
import {funnel} from '../function';
import {not} from '../boolean';

/**
 * Removes values of a flowing array based on a predicate.
 * @param predicate The predicate to remove the values with.
 * @returns Produces a new array without values that pass the predicate.
 */
export function remove<T>(predicate: IterationCallback<boolean, T>): Fn<T[], readonly T[]> {
	return filter(funnel(predicate, not));
}
