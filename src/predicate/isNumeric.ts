import {isFinite} from '../number/comparisons';

/**
 * Check if the given value represents a number. This function is more permissive than `isNumber` as it allows strings
 * that can be converted to numbers.
 * @param value The value to check.
 * @returns `true` if the value represents a number, `false` otherwise.
 * @example
 * ```typescript
 * isNumeric(1); // true
 * isNumeric('1'); // true
 * isNumeric(true); // false
 */
export function isNumeric(value: number): value is number;
export function isNumeric(value: string): value is `${number}`;
export function isNumeric(value: unknown): value is number | `${number}`;
export function isNumeric(value: unknown): value is number | `${number}` {
	return typeof value === 'number' || (typeof value === 'string' && isFinite(Number(value)));
}
