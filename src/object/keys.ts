import type {ToString} from '../types';

export function keys<T extends object>(obj: T): ToString<keyof T>[];
export function keys<T extends object, Raw extends true>(obj: T): (keyof T)[];
export function keys<T extends object>(obj: T): (keyof T)[] {
	return Object.keys(obj) as (keyof T)[];
}
