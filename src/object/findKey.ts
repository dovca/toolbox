import {entries} from './entries';
import type {Fn, Indexable, Maybe, Predicate, StringKeys, Values} from '../types/utils';

/**
 * Returns the first key whose value satisfies the predicate, or undefined if no such key is found.
 * To find a key based on the key itself, use `keys(obj)` followed by `find` instead.
 * @param predicate The predicate to check.
 * @returns The found key or undefined.
 * @example
 * ```typescript
 * findKey(isOdd)({a: 2, b: 3}); // 'b'
 * ```
 */
export function findKey<T extends Indexable>(predicate: Predicate<Values<T>>): Fn<Maybe<StringKeys<T>>, T> {
	return (obj) => {
		for (const [key, value] of entries(obj)) {
			if (predicate(value)) {
				return key;
			}
		}
		return undefined;
	};
}
