import type {AnyArray, Assign} from '../types';
import {isArray, isObject} from '../predicate';
import {splitOnce} from '../string';

type Assigner<
	Path extends string,
	Value,
	Sep extends string,
> = <Obj extends object | AnyArray>(obj: Obj) => Assign<Obj, Path, Value, Sep>;

/**
 * Assign a value to a nested property of an object using a path string.
 * Elements of arrays can be accessed using their numeric index.
 * @param path A string that represents the path to the desired property.
 * @param value The value to assign to the property.
 * @param separator A string that separates the path segments. Default is '.'.
 * @returns The flowing object with the assigned value.
 * @throws TypeError if any segment of the path exists and is not an object or array.
 * @example
 * ```typescript
 * assign('a.b.0.c', 1)({}); // {a: {b: [{c: 1}]}}
 * ```
 */
export function assign<
	Path extends string,
	Value,
	Sep extends string = '.',
>(
	path: Path,
	value: Value,
	separator: Sep = '.' as Sep,
): Assigner<Path, Value, Sep> {
	return (target) => {
		if (!path) {
			return value as any;
		}

		const [key, rest] = splitOnce(separator)(path);

		(target as any) ??= /^\d+$/.test(key) ? [] : {};

		if (!isObject(target) && !isArray(target)) {
			throw new TypeError('Expected an object or array', {cause: {key, target}});
		}

		(target as any)[key] = assign(rest, value, separator)((target as any)[key]);
		return target as any;
	}
}
