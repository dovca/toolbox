import type {Predicate} from '../types/utils';

/**
 * Produces `true` as soon as one of the given predicates passes for the flowing value.
 * @param predicates The predicates to check.
 * @returns Produces a boolean.
 * @example
 * ```typescript
 * any(isString, isNumber)(42); // Produces `true` after calling isNumber.
 * any(isString, isNumber)([]); // Produces `false` after failing all predicates.
 * ```
 */
export function any<T>(...predicates: Predicate<T>[]): Predicate<T> {
	return (value) => predicates.some((p) => p(value));
}
