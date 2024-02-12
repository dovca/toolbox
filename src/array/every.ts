import type {Predicate} from '../types';

/**
 * Produces `true` iff the given predicate passes with every value of the flowing array.
 * @param predicate The predicate to check.
 * @returns Produces a boolean.
 */
export function every<T>(predicate: Predicate<T>): Predicate<ReadonlyArray<T>> {
	  return (values) => values.every(predicate);
}
