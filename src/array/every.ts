import type {Predicate} from '../types';

/**
 * Produces `true` iff the given predicate passes with every value of the flowing array.
 * @param predicate The predicate to check.
 * @returns Produces a boolean.
 * @example
 * ```typescript
 * every(isOdd)([1, 3, 5]); // true
 * every(isOdd)([1, 2, 3]); // false
 * ```
 */
export function every<T>(predicate: Predicate<T>): Predicate<readonly T[]> {
	  return (values) => values.every(predicate);
}
