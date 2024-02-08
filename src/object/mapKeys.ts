import type {Dictionary, Fn, Fn2} from '../types/types';

export function mapKeys<V>(mapper: Fn2<string, V, string>): Fn<Dictionary<V>> {
	return (object) => {
		const result: Dictionary<V> = {};
		for (const [key, value] of Object.entries(object)) {
			result[mapper(key, value)] = value;
		}
		return result;
	}
}
