import type {Fn, IterationCallback} from '../types';

/**
 * Filters a flowing array based on a predicate.
 * @param predicate The predicate to filter the array with.
 * @returns Produces a new array of values that pass the predicate.
 */
export function filter<I, O extends I = I>(predicate: IterationCallback<boolean, I>): Fn<O[], ReadonlyArray<I>>;
export function filter<T>(predicate: IterationCallback<boolean, T>): Fn<T[], ReadonlyArray<T>>;
export function filter<T>(predicate: IterationCallback<boolean, T>): Fn<T[], ReadonlyArray<T>> {
	return (values) => values.filter(predicate);
}
