import type {Fn, Fn2, StringKeys, Values} from '../types';
import {entries} from './entries';

export function mapValues<
	I extends object,
	O extends { [k in StringKeys<I>]: any} = I,
>(mapper: Fn2<O[StringKeys<I>], Values<I>, StringKeys<I>>): Fn<O, I> {
	return (obj) => {
		const result: Partial<O> = {};
		for (const [key, value] of entries(obj)) {
			result[key] = mapper(value, key);
		}
		return result as O;
	}
}
