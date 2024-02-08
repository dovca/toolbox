import type {Dictionary, Fn} from '../types/types';
import {isNullish} from '../predicate/isNullish';

export function groupBy<T>(identification: Fn<T, string | number>): Fn<T[], Dictionary<T[]>>;
export function groupBy<K extends string, T extends { [k in K]?: any }>(identification: K): Fn<T[], Dictionary<T[]>>;
export function groupBy<T>(identification: string | Fn<T, string | number>): Fn<T[], Dictionary<T[]>> {
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
