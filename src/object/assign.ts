import type {AnyArray, Assign} from '../types';
import {isArray, isObject} from '../predicate';
import {splitOnce} from '../string';

type Assigner<
	Path extends string,
	Value,
	Sep extends string,
> = <Obj extends object | AnyArray>(obj: Obj) => Assign<Obj, Path, Value, Sep>;

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
