import type {Dictionary, Fn} from '../types/types';
import {isNullish} from '../predicate/isNullish';

export function groupBy<T>(identification: Fn<string | number, T>): Fn<Dictionary<T[]>, T[]>;
export function groupBy<K extends string, T extends { [k in K]?: any }>(identification: K): Fn<Dictionary<T[]>, T[]>;
export function groupBy<T>(identification: string | Fn<string | number, T>): Fn<Dictionary<T[]>, T[]> {
	return (values) => {
		const result: Dictionary<T[]> = {};
		for (const value of values) {
			if (isNullish(value) && typeof identification !== 'function') {
				throw new TypeError('groupBy: value is nullish and identification is not a function.');
			}
			const id = String(
				typeof identification === 'function'
					? identification(value)
					: value[identification as keyof T]
			);
			if (id in result) {
				result[id].push(value);
			} else {
				result[id] = [value];
			}
		}
		return result;
	}
}
