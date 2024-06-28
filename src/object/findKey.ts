import {entries} from './entries';
import type {Fn, Maybe, Predicate, StringKeys, Values} from '../types/utils';

/**
 * Returns the first key whose value satisfies the predicate, or undefined if no such key is found.
 * @param predicate The predicate to check.
 * @returns The found key or undefined.
 * @example
 * ```typescript
 * findKey(isOdd)({a: 2, b: 3}); // 'b'
 * ```
 */
export function findKey<T extends object>(predicate: Predicate<Values<T>>): Fn<Maybe<StringKeys<T>>, T> {
	return (obj) => {
		for (const [key, value] of entries(obj)) {
			if (predicate(value)) {
				return key;
			}
		}
		return undefined;
	};
}
