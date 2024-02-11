import type {Fn} from '../types/types';

export function push<T, TValue = T>(value: TValue): Fn<(T | TValue)[], ReadonlyArray<T>> {
	return (values) => [...values, value];
}
