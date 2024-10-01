import type {Fn, Indexable, Predicate, StringKeys, Values} from '../types/utils';
import {entries} from './entries';

/**
 * Produces an array of values from the given object where the key passes the predicate.
 * @param predicate The predicate to test each key against.
 * @returns Produces an array of values.
 * @example
 * ```typescript
 * valuesWhere((key) => key.length > 2)({a: 1, ab: 2, abc: 3, abcd: 4}); // => [3, 4]
 * ```
 */
export function valuesWhere<T extends Indexable>(predicate: Predicate<StringKeys<T>>): Fn<Values<T>[], T> {
	return (obj) => {
		const values: Values<T>[] = [];

		for (const [key, value] of entries(obj)) {
			if (predicate(key)) {
				values.push(value);
			}
		}

		return values;
	};
}
