import type {Fn} from '../types';

/**
 * Unwrap a value if it's a function, otherwise return the value.
 */
export function unwrap<T>(value: T | Fn<T, void>): T {
	return typeof value === 'function' ? (value as Fn<T, void>)() : value;
}
