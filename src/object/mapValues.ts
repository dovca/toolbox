import type {Fn, Fn2, Indexable, StringKeys, ValidIndex, Values} from '../types/utils';
import {entries} from './entries';

/** Transforms the values of an object.
 * @param mapper The function that maps the values.
 * @returns Produces a new object with the mapped values.
 * @example
 * ```typescript
 * mapValues((value) => value * 2)({a: 1, b: 2}); // {a: 2, b: 4}
 * ```
 */
export function mapValues<ValueIn, ValueOut>(mapper: Fn2<ValueOut, ValueIn, ValidIndex>): <Obj extends { [key in string]: ValueIn }>(object: Obj) => { [K in keyof Obj]: ValueOut };
export function mapValues<
	ObjIn extends Indexable,
	ObjOut extends { [k in StringKeys<ObjIn>]: any},
>(mapper: Fn2<ObjOut[StringKeys<ObjIn>], Values<ObjIn>, StringKeys<ObjIn>>): Fn<ObjOut, ObjIn>;
export function mapValues<
	I extends Indexable,
	O extends { [k in StringKeys<I>]: any},
>(mapper: Fn2<O[StringKeys<I>], Values<I>, StringKeys<I>>): Fn<O, I> {
	return (obj) => {
		const result = {} as O;
		for (const [key, value] of entries(obj)) {
			result[key] = mapper(value, key);
		}
		return result;
	}
}
