import type {Fn, Indexable, Maybe, Predicate, StringKeys, Values} from '../types/utils';
import {entries} from './entries';

/**
 * Returns the first value whose key satisfies the predicate, or undefined if no such value is found.
 * @param predicate The predicate to check.
 * @returns The found key or undefined.
 * @example
 * ```typescript
 * findValue(startsWith('b'))({foo: 2, bar: 3}); // 3
 * ```
 */
export function findValue<T extends Indexable>(predicate: Predicate<StringKeys<T>>): Fn<Maybe<Values<T>>, T> {
	return (obj) => {
		for (const [key, value] of entries(obj)) {
			if (predicate(key)) {
				return value;
			}
		}
		return undefined;
	}
}
