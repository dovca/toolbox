import type {Fn} from '../types';

export function unshift<T, TValue = T>(value: TValue): Fn<(T | TValue)[], ReadonlyArray<T>> {
	return (values) => [value, ...values];
}
