import type {Dictionary, Fn, Fn2} from '../types/types';

export function mapValues<I, O = I>(mapper: Fn2<I, string, O>): Fn<Dictionary<I>, Dictionary<O>> {
	return (object) => {
		const result: Dictionary<O> = {};
		for (const [key, value] of Object.entries(object)) {
			result[key] = mapper(value, key);
		}
		return result;
	}
}
