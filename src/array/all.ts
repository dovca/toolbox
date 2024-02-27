import type {Predicate} from '../types';
import {call} from '../function';
import {every} from './every';

/**
 * Produces `true` iff all the given predicates pass with the flowing value.
 * @param predicates The predicates to check.
 * @returns Produces a boolean.
 */
export function all<T>(...predicates: readonly Predicate<T>[]): Predicate<T> {
	return (value) => every(call(value))(predicates);
}
