import type {Fn} from '../types';

/**
 * Appends a new value to the flowing array.
 * @param value The value to append.
 * @returns Produces a new array.
 */
export function push<T, TValue = T>(value: TValue): Fn<(T | TValue)[], ReadonlyArray<T>> {
	return (values) => [...values, value];
}
