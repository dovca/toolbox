import type {Dictionary, Fn} from '../types/types';

export function keyBy<T>(key: Fn<T, string | number>): Fn<T[], Dictionary<T>>;
export function keyBy<K extends string, T extends { [k in K]?: any }>(key: K): Fn<T[], Dictionary<T>>;
export function keyBy<T>(key: keyof T | Fn<T, string | number>): Fn<T[], Dictionary<T>> {
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
