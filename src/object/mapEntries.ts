import type {Fn, Indexable, StringKeys, Values} from '../types/utils';
import {entries} from './entries';

/** Maps the entries of an object to a new object.
 * @param mapper The function that maps the entries.
 * @returns The new object with the mapped entries.
 * @example
 * ```typescript
 * mapEntries(([key, value]: [string, number]) => [key.toUpperCase(), value * 2])({a: 1, b: 2}); // {A: 2, B: 4}
 * ```
 */
export function mapEntries<I extends Indexable, O extends Indexable>(
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
