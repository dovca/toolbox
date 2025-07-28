import type {Fn2, Indexable, StringKeys, ValidKey, Values} from '../types/utils';
import {entries} from './entries';
import type {ToString} from '../types/convert';

/** `mapValues<ValueIn, KeyIn, ValueOut>`
 *
 * Transforms the values of an object while keeping keys intact.
 * @param `mapper` The function that maps the values.
 * @returns Produces a new object with the mapped values.
 * @generics The generic params are:
 * - `ValueIn` The type of the flowing object's values.
 * - `KeyIn` The type of the flowing object's keys.
 * - `ValueOut` The type of the mapper function's output.
 * @example
 * ```typescript
 * mapValues((value) => value * 2)({a: 1, b: 2}); // {a: 2, b: 4}
 * ```
 */
export function mapValues<ValueIn, KeyIn extends ValidKey, ValueOut>(
	mapper: Fn2<ValueOut, ValueIn, ToString<KeyIn>>,
): (object: Record<KeyIn, ValueIn>) => Record<ToString<KeyIn>, ValueOut>;

/** `mapValues<ObjectIn, ValueOut>`
 *
 * Transforms the values of an object while keeping keys intact.
 * @param `mapper` The function that maps the values.
 * @returns Produces a new object with the mapped values.
 * @generics The generic params are:
 * - `ObjectIn` The type of the flowing object
 * - `ValueOut` The type of the mapper function's output.
 * @example
 * ```typescript
 * mapValues((value) => value * 2)({a: 1, b: 2}); // {a: 2, b: 4}
 * ```
 */
export function mapValues<ObjectIn extends Indexable, ValueOut>(
	mapper: Fn2<ValueOut, Values<ObjectIn>, StringKeys<ObjectIn>>,
): (object: ObjectIn) => Record<StringKeys<ObjectIn>, ValueOut>;

export function mapValues<ValueIn, KeyIn extends ValidKey, ValueOut>(
	mapper: Fn2<ValueOut, ValueIn, ToString<KeyIn>>,
): (object: Record<KeyIn, ValueIn>) => Record<ToString<KeyIn>, ValueOut> {
	return (obj: { [K in KeyIn]: ValueIn}) => {
		const result = {} as { [K in ToString<KeyIn>]: ValueOut };
		for (const [key, value] of entries(obj)) {
			result[key] = mapper(value, key);
		}
		return result;
	}
}
