/**
 * Returns the value passed to it.
 */
export function identity(): undefined;
export function identity<T>(value: T): T;
export function identity<T>(value?: T): T | undefined {
	return value;
}
