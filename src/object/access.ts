import type {Access} from '../types/object';
import {isArray} from '../predicate/isArray';
import {isObject} from '../predicate/isObject';
import {splitOnce} from '../string/split';

type Accessor<Path extends string, Sep extends string> = <Obj>(obj: Obj) => Access<Obj, Path, Sep>;

/**
 * Access a nested property of an object using a path string.
 * Elements of arrays can be accessed using their numeric index.
 * @param path A string that represents the path to the desired property.
 * @param separator A string that separates the path segments. Default is '.'.
 * @returns The value of a nested flowing object or undefined if the path is invalid.
 * @example
 * ```typescript
 * access('a.b.0.c')({a: {b: [{c: 1}]}}); // 1
 * ```
 */
export function access<
	Path extends string,
	Sep extends string = '.',
>(
	path: Path,
	separator: Sep = '.' as Sep,
): Accessor<Path, Sep> {
	return (obj) => {
		const [key, rest] = splitOnce(separator)(path);

		return (
			rest
				? (isObject(obj) || isArray(obj)) && key in obj
					? access(rest, separator)(obj[key as keyof typeof obj])
					: undefined
				: obj[key as keyof typeof obj]
		) as Access<typeof obj, Path, Sep>
	}
}
