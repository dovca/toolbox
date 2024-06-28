import type {ToString} from '../types/convert';

/**
 * Returns the keys of an object.
 * @param obj The object to get the keys of.
 * @returns The keys of the object.
 * @example
 * ```typescript
 * keys({a: 1, b: 2}); // ['a', 'b']
 * ```
 */
export function keys<T extends object>(obj: T): ToString<keyof T>[];
export function keys<T extends object, _Raw extends true>(obj: T): (keyof T)[];
export function keys<T extends object>(obj: T): (keyof T)[] {
	return Object.keys(obj) as (keyof T)[];
}
