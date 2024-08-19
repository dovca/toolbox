/**
 * Check if the given string is uppercase.
 * @param value The string to check.
 * @returns Returns `true` if the string is uppercase, `false` otherwise.
 * @example
 * ```typescript
 * isUppercase('HELLO'); // => true
 * isUppercase('Hello'); // => false
 * ```
 */
export function isUppercase(value: string): boolean {
	return value === value.toUpperCase();
}
