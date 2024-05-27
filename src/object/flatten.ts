import {keys} from './keys';
import {isArray, isObject} from '../predicate';
import type {AnyArray} from '../types';

type Flattener = <Obj extends object>(obj: Obj) => object;

export function flatten<Sep extends string = '.'>(separator: Sep = '.' as Sep, prefix = ''): Flattener {
	return (obj) => keys(obj).reduce((acc, k) => ({
		...acc,
		...isObject(obj[k as keyof typeof obj]) || isArray(obj[k as keyof typeof obj])
			? flatten(separator, `${prefix}${k}${separator}`)(obj[k as keyof typeof obj] as object | AnyArray)
			:{[`${prefix}${k}`]: obj[k as keyof typeof obj]},
	}), {});
}
