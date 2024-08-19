import type {Fn, Predicate, StringKeys, Values} from '../types/utils';
import {entries} from './entries';

/**
 * Produces an array of keys from the given object where the value passes the predicate.
 * @param predicate The predicate to test each value against.
 * @returns Produces an array of keys.
 * @example
 * ```typescript
 * keysWhere((value) => value > 2)({a: 1, b: 2, c: 3, d: 4}); // => ['c', 'd']
 * ```
 */
export function keysWhere<T extends object>(predicate: Predicate<Values<T>>): Fn<StringKeys<T>[], T> {
	return (obj) => {
		const keys: StringKeys<T>[] = [];

		for (const [key, value] of entries(obj)) {
			if (predicate(value)) {
				keys.push(key);
			}
		}

		return keys;
	};
}
