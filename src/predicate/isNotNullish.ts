/**
 * Checks if the input is not null or undefined.
 * @param value The value to check.
 * @returns `true` if the value is not null and is not undefined, `false` otherwise.
 * @example
 * ```typescript
 * isNotNullish(0); // true
 * isNotNullish(null); // false
 * ```
 */
export function isNotNullish<T>(value: T): value is Exclude<T, null | undefined> {
	return value !== null && value !== undefined;
}
