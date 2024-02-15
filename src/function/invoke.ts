import type {Fn} from '../types';

export function invoke<T>(value: T | Fn<T, void>): T {
	return typeof value === 'function' ? (value as Fn<T, void>)() : value;
}
