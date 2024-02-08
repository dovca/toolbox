import type {Fn} from '../types/types';

export function push<T, TValue = T>(value: TValue): Fn<ReadonlyArray<T>, (T | TValue)[]> {
	return (values) => [...values, value];
}
