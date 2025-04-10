import type {ConditionalKeys, Fn} from '../types/utils';
import {property} from '../object/property';

/**
 * Groups the values of an array by a key. The elements in groups are in the same relative order as they appear
 * in the original array.
 * @param keyer The function to produce the key.
 * @returns Produces a new object of keyed arrays.
 * @example
 * ```typescript
 * groupWith(round)([1.1, 1.2, 1.8, 2.2]); // {1: [1.1, 1.2], 2: [1.8, 2.2]}
 * ```
 */
export function groupWith<T, K extends string | number>(keyer: Fn<K, T>):
	string extends K
		? Fn<Record<string, T[]>, readonly T[]>
		: number extends K
			? Fn<Record<number, T[]>, readonly T[]>
			: Fn<Partial<Record<K, T[]>>, readonly T[]> {
	return (values) => {
		const result: Record<K, T[]> = {} as Record<K, T[]>;
		for (const value of values) {
			const id = keyer(value);
			if (id in result) {
				result[id].push(value);
			} else {
				result[id] = [value];
			}
		}
		return result;
	}
}

/**
 * Groups the object values of an array by a key. The elements in groups are in the same relative order as they appear
 * in the original array.
 * @param key The key to group by.
 * @returns Produces a new object of keyed arrays.
 * @example
 * ```typescript
 * groupBy('id')([{id: 1}, {id: 2}, {id: 1}]); // {1: [{id: 1}, {id: 1}], 2: [{id: 2}]}
 * ```
 */
export function groupBy<T extends object>(key: ConditionalKeys<T, string | number | boolean> & (string | number)): Fn<Partial<Record<string | number, T[]>>, readonly T[]>{
	return groupWith(property(key) as Fn<string | number, T>);
}
