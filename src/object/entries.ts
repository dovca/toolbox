import type {StringKeys} from '../types';

export function entries<T extends object>(obj: T): [StringKeys<T>, T[StringKeys<T>]][] {
	return Object.entries(obj) as [StringKeys<T>, T[StringKeys<T>]][];
}
