import {entries} from './entries';
import type {Fn, StringKeys, Values} from '../types';

/** Maps the entries of an object to a new object.
 * @param mapper The function that maps the entries.
 * @returns The new object with the mapped entries.
 * @example
 * ```typescript
 * mapEntries(([key, value]) => [key.toUpperCase(), value * 2])({a: 1, b: 2}); // {A: 2, B: 4}
 * ```
 */
export function mapEntries<I extends object, O extends object>(
	mapper: Fn<[StringKeys<O>, Values<O>], [StringKeys<I>, Values<I>]>,
): Fn<O, I> {
	return (input) => {
		const result = {} as any;
		for (const entry of entries(input)) {
			const [newKey, newValue] = mapper(entry);
			result[newKey] = newValue;
		}
		return result as O;
	};
}
