/**
 * Check if the value is an array.
 * @param value The value to check.
 * @returns `true` if the value is an array, `false` otherwise.
 * @example
 * ```typescript
 * isArray([]); // true
 * isArray({}); // false
 * ```
 */
export function isArray<T = unknown>(value: unknown): value is T[] {
	return Array.isArray(value);
}
