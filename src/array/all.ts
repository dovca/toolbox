import type {Predicate} from '../types';

/**
 * Produces `true` iff all the given predicates pass with the flowing value.
 * @param predicates The predicates to check.
 * @returns Produces a boolean.
 */
export function all<T>(...predicates: Predicate<T>[]): Predicate<T> {
	return (value) => predicates.every((predicate) => predicate(value));
}
