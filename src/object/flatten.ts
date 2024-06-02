import {keys} from './keys';
import {isArray, isObject} from '../predicate';
import type {AnyArray} from '../types';

type Flattener = <Obj extends object>(obj: Obj) => object;

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
	return (obj) => keys(obj).reduce((acc, k) => ({
		...acc,
		...isObject(obj[k as keyof typeof obj]) || isArray(obj[k as keyof typeof obj])
			? flatten(separator, `${prefix}${k}${separator}`)(obj[k as keyof typeof obj] as object | AnyArray)
			:{[`${prefix}${k}`]: obj[k as keyof typeof obj]},
	}), {});
}
