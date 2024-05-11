import type {AnyFunction, FnN} from '../types';

/**
 * Wrap a value in a function if it's not a function.
 */
export function wrap<T extends AnyFunction>(value: T): T;
export function wrap<T>(value: T): FnN<T>;
export function wrap(value: unknown) {
	return typeof value === 'function' ? value : () => value;
}
