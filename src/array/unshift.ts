import type {Fn} from '../types/types';

export function unshift<T, TValue = T>(value: TValue): Fn<ReadonlyArray<T>, (T | TValue)[]> {
	return (values) => [value, ...values];
}
