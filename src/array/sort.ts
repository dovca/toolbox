import type {Comparator, Fn} from '../types/types';

export function sort<T>(comparator: Comparator<T, number>): Fn<T[], ReadonlyArray<T>> {
	return (values) => values.toSorted(comparator);
}
