/**
 * Returns a function that always returns the same value.
 * @param value
 * @returns Always produces the same value.
 */
export function constant<T>(value: T): (...args: any[]) => T {
	return () => value;
}
