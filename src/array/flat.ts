import type {Fn} from '../types/types';
import {forwardIterator} from './utils/iterators';

export function flat<T extends ReadonlyArray<any>, D extends number = 1>(depth: D = 1 as D): Fn<T, FlatArray<T, D>[]> {
	return (values) => {
		const result: T[] = [];
		for (const [value] of forwardIterator(values)) {
			if (depth > 0 && Array.isArray(value)) {
				result.push(...flat(depth - 1)(value));
			} else {
				result.push(value);
			}
		}
		return result as FlatArray<T, D>[];
	};
}
