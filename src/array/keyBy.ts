import type {Dictionary, Fn} from '../types/utils';

/**
 * Creates a dictionary from a flowing array, using the specified function to produce a key.
 * @param key The function to produce dictionary keys with.
 * @returns Produces a new dictionary.
 * @example
 * ```typescript
 * keyBy(round)([1.1, 2.2, 3.3]); // {1: 1.1, 2: 2.2, 3: 3.3}
 * ```
 */
export function keyBy<T>(key: Fn<string | number, T>): Fn<Dictionary<T>, readonly T[]>;

/**
 * Creates a dictionary from a flowing array, using the specified key.
 * Later values with the same key will overwrite earlier ones.
 * @param key The key to use for the dictionary.
 * @returns Produces a new dictionary.
 * @example
 * ```typescript
 * keyBy('name')([
 *   {id: 1, name: 'Alice'},
 *   {id: 2, name: 'Bob'},
 *   {id: 3, name: 'Alice'},
 * ]); // {Alice: {id: 3, name: 'Alice'}, Bob: {id: 2, name: 'Bob'}}
 */
export function keyBy<T extends object, K extends keyof T = keyof T>(key: K): Fn<Partial<Record<T[K] & (string | number), T>>, readonly T[]>;
export function keyBy<K extends string, T extends { [k in K]: string | number }>(key: K): Fn<Partial<Record<T[K], T>>, readonly T[]>;

export function keyBy<T>(key: keyof T | Fn<string | number, T>): Fn<Dictionary<T>, readonly T[]> {
	return (values) => {
		const result: Dictionary<T> = {};
		for (const value of values) {
			const computedKey = String(
				typeof key === 'function'
					? key(value)
					: value[key]
			);
			result[computedKey] = value;
		}
		return result;
	};
}
