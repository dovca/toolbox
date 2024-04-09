import type {Values} from '../types';

export function entries<T extends object>(obj: T): [keyof T, Values<T>][] {
	return Object.entries(obj) as [keyof T, Values<T>][];
}

export const toPairs = entries;
