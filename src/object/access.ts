import type {Access} from '../types';
import {isArray, isObject} from '../predicate';
import {splitOnce} from '../string';

type Accessor<Path extends string, Sep extends string> = <Obj>(obj: Obj) => Access<Obj, Path, Sep>;

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
