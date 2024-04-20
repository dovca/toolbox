import type {ToString} from '../types';

/**
 * Returns an empty string.
 */
export function toString(): '';

/**
 * Converts a value to a string.
 * @param value The value to convert.
 * @returns The string representation of the value.
 */
export function toString<T>(value: T): ToString<T>;

export function toString(value?: any) {
	return String(value);
}
