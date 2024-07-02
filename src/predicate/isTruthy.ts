import {isFalsy} from './isFalsy';

/**
 * Check if the value is truthy, that is not `false`, an empty string, `0`, `null`, `undefined`, or `0n`.
 * This is the opposite of `isFalsy`.
 * @param value The value to check.
 * @returns `true` if the value is truthy, `false` otherwise.
 * @example
 * ```typescript
 * isTruthy(1); // true
 * ```
 */
export function isTruthy(value: unknown): boolean {
	return !isFalsy(value);
}
