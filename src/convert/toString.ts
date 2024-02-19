import type {Primitive} from '../types';

/**
 * Converts a flowing primitive value to a string.
 * @param value
 */
export function toString<T extends Primitive>(value: T): `${T}` {
	return String(value) as `${T}`;
}
