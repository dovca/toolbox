import type {ToString} from 'type-fest/source/internal';

export function keys<T extends object>(obj: T): ToString<keyof T>[];
export function keys<T extends object, Raw extends true>(obj: T): (keyof T)[];
export function keys<T extends object>(obj: T): (keyof T)[] {
	return Object.keys(obj) as (keyof T)[];
}
