import {keys} from './keys';
import {isArray, isNumeric, isObject} from '../predicate';
import {quote} from '../string';

type Flattener = <Obj extends object>(obj: Obj) => Record<string, any>;

/**
 * Flattens a flowing object into a single-depth object.
 * @param separator A string that separates the path segments. Default is '.'.
 * @param prefix A string that prefixes the keys. Default is an empty string. This is used internally for recursion.
 * @returns Produces a new object whose keys are paths to the original nested values.
 * @example
 * ```typescript
 * flatten()({a: {b: 1, c: 2}}); // {a.b: 1, a.c: 2}
 * ```
 */
export function flatten<Sep extends string = '.'>(separator: Sep = '.' as Sep, prefix = ''): Flattener {
	return (obj) => keys(obj).reduce((acc, key) => {
		// Wrap numeric keys of objects in quotes to differentiate them from array indices.
		const sanitizedKey = isNumeric(key) && isObject(obj) ? quote(key) : key;
		const nextKey = `${prefix}${sanitizedKey}`;
		const value = obj[key as keyof typeof obj];

		return {
			...acc,
			...isObject(value) || isArray(value)
				? flatten(separator, `${nextKey}${separator}`)(value)
				: {[nextKey]: value},
		};
	}, {});
}
