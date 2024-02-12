import type {IterationCallback, Predicate} from '../types';

/**
 * Checks if at least one element in the flowing array passes the given predicate
 * @param predicate A function to test for each element.
 * @returns Produces a boolean.
 */
export function some<T>(predicate: IterationCallback<boolean, T>): Predicate<ReadonlyArray<T>> {
	return (values) => values.some(predicate);
}
