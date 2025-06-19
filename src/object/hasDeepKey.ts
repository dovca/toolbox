import {splitOnce} from '../string/split';
import {isObject} from '../predicate/isObject';
import {isArray} from '../predicate/isArray';
import type {Predicate} from '../types/utils';

/**
 * Checks if an object has a deeply nested key.
 * Elements of arrays can be accessed using their numeric index.
 * @param path A string that represents the path to the desired property.
 * @param separator A string that separates the path segments. Default is '.'.
 * @returns True if the flowing object has the specified nested key, false otherwise.
 * @example
 * ```typescript
 * hasDeepKey('a.b.0.c')({a: {b: [{c: 1}]}}); // true
 * ```
 */
export function hasDeepKey(
	path: string,
	separator = '.',
): Predicate<object> {
	return (obj) => {
		const [key, rest] = splitOnce(separator)(path);

		return (
			(isObject(obj) || isArray(obj)) && key in obj
				? rest
					? hasDeepKey(rest, separator)(obj[key as keyof typeof obj])
					: key in obj
				: false
		);
	};
}
