import type {Predicate} from '../types/utils';
import {every} from '../array/every';
import {isNotEqual} from './compare';

/**
 * Checks if the given value is not one of the specified values.
 * @param values The values to check against.
 * @returns `true` if the value is not one of the specified values, `false` otherwise.
 * @example
 * ```typescript
 * isNotOneOf(1, 2, 3)(4); // true
 * isNotOneOf(1, 2, 3)(2); // false
 * ```
 */
export function isNotOneOf<T>(...values: readonly T[]): Predicate<T> {
	return (searchValue) => every(isNotEqual(searchValue))(values);
}
