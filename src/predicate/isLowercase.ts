/**
 * Check if the given string is lowercase.
 * @param value The string to check.
 * @returns Returns `true` if the string is lowercase, `false` otherwise.
 * @example
 * ```typescript
 * isLowercase('hello'); // => true
 * isLowercase('Hello'); // => false
 * ```
 */
export function isLowercase(value: string): boolean {
	return value === value.toLowerCase();
}
