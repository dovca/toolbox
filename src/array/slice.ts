import type {Fn} from '../types/types';

export function slice<T>(start?: number, end?: number): Fn<ReadonlyArray<T>, T[]> {
	return (values) => values.slice(start, end);
}
