import {assign} from './assign';
import {entries} from './entries';
import {isNumeric} from '../predicate/isNumeric';

/**
 * Expands all keys of a flowing object into a new nested object.
 * @param separator A string that separates the path segments. Default is '.'.
 * @returns Produces a new object with all keys expanded into nested objects.
 * @throws TypeError if a key could not be expanded. See when `assign` throws.
 * @example
 * ```typescript
 * deepen()({'a.b.0.c': 1}); // {a: {b: [{c: 1}]}}
 * ```
 */
export function deepen(separator = '.'): <T extends object>(obj: T) => object {
	return (obj) => {
		const pairs = entries(obj);

		let firstKeysAreNumeric: boolean | undefined = undefined;

		// Validate flat keys in input
		pairs.forEach(([key]) => {
			const isFirstKeyNumeric = isNumeric(key.split(separator)[0]);
			if (firstKeysAreNumeric === undefined) {
				firstKeysAreNumeric = isFirstKeyNumeric;
			} else if (isFirstKeyNumeric !== firstKeysAreNumeric) {
				throw new Error(
					'Top-level keys must be either all numbers or all strings or quoted numbers',
					{cause: {conflict: [pairs[0][0], key]}}
				);
			}
		});

		return pairs.reduce((acc, [key, value]) => assign(key, value, separator)(acc), firstKeysAreNumeric ? [] : {});
	};
}
