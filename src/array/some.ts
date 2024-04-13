import type {IterationCallback, Predicate} from '../types';

/**
 * Checks if at least one element in the flowing array passes the given predicate
 * @param predicate A function to test each value with.
 * @returns Produces a boolean.
 * @example
 * ```typescript
 * some(isOdd)([1, 2, 3]); // true
 * some(isOdd)([2, 4, 6]); // false
 * ```
 */
export function some<T>(predicate: IterationCallback<boolean, T>): Predicate<readonly T[]> {
	return (values) => values.some(predicate);
}
