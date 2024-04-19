/**
 * Unwrap a value if it's a function, otherwise return the value.
 * @param value The value to unwrap
 * @returns The unwrapped value
 * @example
 * ```typescript
 * unwrap(42); // 42
 * unwrap(() => 42); // 42
 * ```
 */
export function unwrap<T>(value: T): T extends (...args: any[]) => infer R ? R : T {
	return typeof value === 'function' ? value() : value;
}
