import type {Fn} from '../types';

export function flat<T extends ReadonlyArray<any>, D extends number = 1>(depth: D = 1 as D): Fn<FlatArray<T, D>[], T> {
	return (values) => values.flat(depth);
}
