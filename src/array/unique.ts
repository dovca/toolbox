/**
 * Returns a new array with unique values.
 * @param values The array to access unique values from.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * unique([1, 2, 3, 2, 3, 1]); // [1, 2, 3]
 * ```
 */
export function unique<T>(values: readonly T[]): T[] {
	return Array.from(new Set(values));
}
