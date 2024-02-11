import type {Fn} from '../types/types';

export function property<P extends string, T extends { [K in P]: any }>(prop: P): Fn<T[P], T> {
	return (obj) => obj[prop];
}
