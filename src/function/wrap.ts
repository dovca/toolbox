import type {Fn} from '../types';

/**
 * Wrap a value in a function if it's not a function.
 */
export function wrap<T extends Function>(value: T): T;
export function wrap<T>(value: T): Fn<T, void>;
export function wrap(value: unknown) {
	return typeof value === 'function' ? value : () => value;
}
