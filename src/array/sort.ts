import type {Fn, Fn2} from '../types/types';

export function sort<T>(comparator: Fn2<T, T, number>): Fn<ReadonlyArray<T>, T[]> {
	return (values) => values.toSorted(comparator);
}
