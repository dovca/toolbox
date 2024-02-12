import type {Fn} from '../types';

/**
 * Adds a value to the beginning of the flowing array.
 * @param value The value to add to the beginning of the array.
 * @returns Produces a new array with the value added to the beginning.
 */
export function unshift<T, TValue = T>(value: TValue): Fn<(T | TValue)[], ReadonlyArray<T>> {
	return (values) => [value, ...values];
}
