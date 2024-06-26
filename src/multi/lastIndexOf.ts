import type {Fn} from '../types/utils';
import {discard} from '../array/discard';

export function lastIndexOf(searchValue: string, position?: number): Fn<number, string | string[]>;
export function lastIndexOf<A, S extends A = A>(searchValue: S, position?: number): Fn<number, readonly A[]>;
export function lastIndexOf(searchValue: any, position?: number): Fn<number, any> {
	const args = discard(undefined)([searchValue, position]);
	return (input) => input.lastIndexOf.call(input, ...args);
}
