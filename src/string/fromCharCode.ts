/**
 * Converts a Unicode code point to a string.
 * @param codePoint The Unicode code point to convert.
 * @returns the string representation of the Unicode code point.
 * @example
 * ```typescript
 * fromCharCode(97); // 'a'
 * ```
 */
export function fromCharCode(codePoint: number): string {
	return String.fromCharCode(codePoint);
}
