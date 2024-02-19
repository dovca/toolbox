import type {Fn} from '../types';

/**
 * Call the flowing function with the given value.
 * @param value The value to call the function with.
 */
export function call<T, R>(value: T): Fn<R, Fn<R, T>> {
	return (fn) => fn(value);
}
