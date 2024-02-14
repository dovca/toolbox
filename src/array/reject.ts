import type {Fn, IterationCallback} from '../types';
import {gather, pipe, spread} from '../function';
import {not} from '../bool';

/**
 * Rejects values of a flowing array based on a predicate.
 * @param predicate The predicate to reject the values with.
 * @returns Produces a new array of values that fail the predicate.
 */
export function reject<T>(predicate: IterationCallback<boolean, T>): Fn<T[], ReadonlyArray<T>> {
	return (values) => values.filter(gather(pipe(spread(predicate), not)));
}
