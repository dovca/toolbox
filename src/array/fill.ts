import type {Fn} from '../types/types';

export function fill<T>(value: T, start?: number, end?: number): Fn<ReadonlyArray<T>, T[]> {
	return (array) => array.slice().fill(value, start, end);
}
