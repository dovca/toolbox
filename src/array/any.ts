import type {Predicate} from '../types';

/**
 * Produces `true` as soon as one of the given predicates passes for the flowing value.
 * @param predicates The predicates to check.
 * @returns Produces a boolean.
 */
export function any<T>(...predicates: Predicate<T>[]): Predicate<T> {
	return (value) => predicates.some((predicate) => predicate(value));
}
