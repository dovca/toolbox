import type {ConditionalKeys, Fn} from '../types';
import {property} from '../object';

/**
 * Groups the values of an array by a key.
 * @param keyer The function to produce the key.
 * @returns Produces a new object of keyed arrays.
 */
export function groupWith<T, K extends string | number>(keyer: Fn<K, T>): Fn<Partial<Record<K, T[]>>, T[]> {
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

export function groupBy<T extends object>(key: ConditionalKeys<T, string | number | boolean> & (string | number)) {
	return groupWith(property(key) as Fn<string | number, T>);
}
