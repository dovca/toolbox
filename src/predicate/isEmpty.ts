import type {IsEmpty} from '../types/predicate';

/**
 * Checks if the given value is empty, that is `undefined`, `null`, an empty string, an empty array, or an empty object.
 * @param value The value to check.
 * @returns `true` if the value is empty, `false` otherwise.
 * @example
 * ```typescript
 * isEmpty([]); // true
 * ```
 */
export function isEmpty<T>(value: T): IsEmpty<T> {
	return (
		typeof value === 'undefined'
			|| value === ''
			|| value === null
			|| (Array.isArray(value) && !value.length)
			|| (typeof value === 'object' && !Object.keys(value).length)
	) as IsEmpty<T>;
}
