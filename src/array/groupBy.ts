import type {Fn} from '../types';

/**
 * Groups the values of an array by a key.
 * @param keyer The function to produce the key.
 * @returns Produces a new object of keyed arrays.
 */
export function groupBy<T, K extends string | number>(keyer: Fn<K, T>): Fn<Record<K, T[]>, T[]> {
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
