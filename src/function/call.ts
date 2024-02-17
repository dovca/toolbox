import type {Fn} from '../types';

export function call<T, R>(value: T): Fn<R, Fn<R, T>> {
	return (fn) => fn(value);
}
