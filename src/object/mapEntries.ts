import type {Entries, Fn, FromEntries, Indexable, StringKeys, ValidIndex, Values} from '../types/utils';
import {entries} from './entries';

/** Maps the entries of an object to a new object.
 * @param mapper The function that maps the entries.
 * @returns The new object with the mapped entries.
 * @example
 * ```typescript
 * mapEntries(([key, value]) => [key.toUpperCase(), value * 2])({a: 1, b: 2}); // {A: 2, B: 4}
 * ```
 */
export function mapEntries<InObject extends object, OutEntries extends readonly [ValidIndex, any]>(
	mapper: Fn<OutEntries, Entries<InObject>>,
): Fn<FromEntries<OutEntries>, InObject>;
/** Maps the entries of an object to a new object.
 * @param mapper The function that maps the entries.
 * @returns The new object with the mapped entries.
 * @example
 * ```typescript
 * mapEntries(([key, value]) => [key.toUpperCase(), value * 2])({a: 1, b: 2}); // {A: 2, B: 4}
 * ```
 */
export function mapEntries<Input extends Indexable, Output extends Indexable>(
	mapper: Fn<[StringKeys<Output>, Values<Output>], [StringKeys<Input>, Values<Input>]>,
): Fn<Output, Input>;
export function mapEntries<Input extends Indexable, Output extends Indexable>(
	mapper: Fn<[StringKeys<Output>, Values<Output>], [StringKeys<Input>, Values<Input>]>,
): Fn<Output, Input> {
	return (input) => {
		const result = {} as any;
		for (const entry of entries(input)) {
			const [newKey, newValue] = mapper(entry);
			result[newKey] = newValue;
		}
		return result as Output;
	};
}
