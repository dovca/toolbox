import type {Dictionary, Fn} from '../types';

/**
 * Creates a dictionary from a flowing array, using the specified key.
 * @param key The key to use for the dictionary.
 * @returns Produces a new dictionary.
 */
export function keyBy<T>(key: Fn<string | number, T>): Fn<Dictionary<T>, ReadonlyArray<T>>;
export function keyBy<K extends string, T extends { [k in K]?: any }>(key: K): Fn<Dictionary<T>, ReadonlyArray<T>>;
export function keyBy<T>(key: keyof T | Fn<string | number, T>): Fn<Dictionary<T>, ReadonlyArray<T>> {
	return (values) => {
		const result: Dictionary<T> = {};
		for (const value of values) {
			const computedKey = String(
				typeof key === 'function'
					? key(value)
					: value[key as keyof T]
			);
			result[computedKey] = value;
		}
		return result;
	};
}
