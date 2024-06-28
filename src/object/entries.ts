import type {StringKeys, Values} from '../types/utils';

/**
 * Returns an array of key-value pairs of an object.
 * @param obj An object.
 * @returns An array of key-value pairs.
 * @example
 * ```typescript
 * entries({a: 1, b: 2}); // [['a', 1], ['b', 2]]
 * ```
 */
export function entries<T extends object>(obj: T): [StringKeys<T>, Values<T>][] {
	return Object.entries(obj) as [StringKeys<T>, Values<T>][];
}
