/**
 * Check if the value is falsy, that is `false`, an empty string, `0`, `null`, `undefined`, or `0n`.
 * @param value The value to check.
 * @returns `true` if the value is falsy, `false` otherwise.
 * @example
 * ```typescript
 * isFalsy(0); // true
 * ```
 */
export function isFalsy(value: unknown): value is false | '' | 0 | null | undefined | 0n {
	return !value;
}
