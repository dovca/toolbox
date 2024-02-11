import {entries} from './entries';
import type {Fn, Predicate, StringKeys, Values} from '../types';

// Returns the first key whose value satisfies the predicate, or undefined if no such key is found.
export function findKey<T extends object>(predicate: Predicate<Values<T>>): Fn<StringKeys<T> | undefined, T> {
	return (obj) => {
		for (const [key, value] of entries(obj)) {
			if (predicate(value)) {
				return key;
			}
		}
		return undefined;
	};
}
