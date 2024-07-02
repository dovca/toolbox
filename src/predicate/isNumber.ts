/**
 * Check if the given value is a number.
 * @param value The value to check.
 * @returns `true` if the value is a number, `false` otherwise.
 * @example
 * ```typescript
 * isNumber(0); // true
 * isNumber('0'); // false
 * ```
 */
export function isNumber(value: unknown): value is number {
	return typeof value === 'number';
}
