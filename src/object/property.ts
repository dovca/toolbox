import type {Fn} from '../types';

export function property<T extends object, P extends keyof T>(prop: P): Fn<T[P], T> {
	return (obj) => obj[prop];
}
