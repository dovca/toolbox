/**
 * Checks if the given value is an object. This does not mean that the value is an instance of `Object`, but rather
 * that it is a non-null, non-array object.
 * @param value The value to check.
 * @returns `true` if the value is an object, `false` otherwise.
 * @example
 * ```typescript
 * isObject({}); // true
 * isObject([]); // false
 * ```
 */
export function isObject<T extends object>(value: unknown): value is T {
	return value !== null
		&& typeof value === 'object'
		&& !Array.isArray(value);
}
