import type {StringKeys, Values} from '../types';

export function entries<T extends object>(obj: T): [StringKeys<T>, Values<T>][] {
	return Object.entries(obj) as [StringKeys<T>, Values<T>][];
}
