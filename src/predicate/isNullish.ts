/**
 * Check if the value is null or undefined.
 * @param value The value to check.
 * @returns `true` if the value is null or undefined, `false` otherwise.
 * @example
 * ```typescript
 * isNullish(null); // true
 * ```
 */
export function isNullish(value: unknown): value is null | undefined {
	return value === null || value === undefined;
}
