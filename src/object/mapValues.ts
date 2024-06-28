import type {Fn, Fn2, StringKeys, Values} from '../types/utils';
import {entries} from './entries';

/** Transforms the values of an object.
 * @param mapper The function that maps the values.
 * @returns Produces a new object with the mapped values.
 * @example
 * ```typescript
 * mapValues((value) => value * 2)({a: 1, b: 2}); // {a: 2, b: 4}
 * ```
 */
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
