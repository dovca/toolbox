import {assign} from './assign';
import {entries} from './entries';

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
	return (obj) => entries(obj).reduce((acc, [key, value]) => assign(key, value, separator)(acc), {});
}
