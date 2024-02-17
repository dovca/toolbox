import type {Fn} from '../types';

export function wrap<T extends Function>(value: T): T;
export function wrap<T>(value: T): Fn<T, void>;
export function wrap(value: unknown) {
	return typeof value === 'function' ? value : () => value;
}
