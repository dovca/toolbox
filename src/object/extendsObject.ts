import {entries} from './entries';
import type {Predicate} from '../types/utils';

/**
 * Checks if the flowing object extends the given object.
 * @param obj The object whose properties and values are to be checked.
 * @returns Produces true if the flowing object has all the properties and values of the given object. Extra properties are allowed.
 * @example
 * ```typescript
 * extendsObject({a: 1})({a: 1, b: 2}); // true
 * extendsObject({a: 3, b: 2})({a: 1, b: 2}); // false
 * ```
 */
export function extendsObject(obj: object): Predicate<object> {
	const pairs = entries(obj);

	return (input) => {
		for (const [key, value] of pairs) {
			if (!(key in input) || input[key] !== value) {
				return false;
			}
		}

		return true;
	}
}
