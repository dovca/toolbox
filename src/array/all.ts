import type {Predicate} from '../types/utils';

/**
 * Produces `true` iff all the given predicates pass with the flowing value.
 * @param predicates The predicates to check.
 * @returns Produces a boolean.
 * @example
 * ```typescript
 * all(isNumber, isOdd)(3); // true
 * all(isNumber, isOdd)(2); // false
 * ```
 */
export function all<T>(...predicates: readonly Predicate<T>[]): Predicate<T> {
	return (value) => predicates.every((p) => p(value));
}
