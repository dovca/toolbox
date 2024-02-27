/**
 * Returns a new array with unique values.
 * @param values
 */
export function unique<T>(values: readonly T[]): T[] {
	return Array.from(new Set(values));
}
