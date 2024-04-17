import type {Fn, Fn2, StringKeys, Values} from '../types';
import {entries} from './entries';

export function mapValues<
	I extends object,
	O extends { [k in keyof I]: any} = I,
>(mapper: Fn2<O[keyof I], Values<I>, StringKeys<I>>): Fn<O, I> {
	return (obj) => {
		const result: any = {};
		for (const [key, value] of entries(obj)) {
			result[key] = mapper(value, key);
		}
		return result as O;
	}
}
