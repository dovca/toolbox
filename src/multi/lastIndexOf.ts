import type {Fn} from '../types';
import {remove} from '../array';

export function lastIndexOf(searchValue: string, position?: number): Fn<number, string | string[]>;
export function lastIndexOf<A, S extends A = A>(searchValue: S, position?: number): Fn<number, ReadonlyArray<A>>;
export function lastIndexOf(searchValue: any, position?: number): Fn<number, any> {
	const args = remove(undefined)([searchValue, position]);
	return (input) => input.lastIndexOf.apply(input, args);
}
