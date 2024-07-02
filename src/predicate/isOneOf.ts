import type {Predicate} from '../types/utils';
import {some} from '../array/some';
import {isEqual} from './compare';

/**
 * Checks if the given value is one of the specified values.
 * @param values The values to check against.
 * @returns `true` if the value is one of the specified values, `false` otherwise.
 * @example
 * ```typescript
 * isOneOf(1, 2, 3)(4); // false
 * isOneOf(1, 2, 3)(2); // true
 * ```
 */
export function isOneOf<T>(...values: readonly T[]): Predicate<T> {
	return (searchValue) => some(isEqual(searchValue))(values);
}
