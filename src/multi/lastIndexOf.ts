import type {Fn} from '../types';

export function lastIndexOf(searchValue: string, position?: number): Fn<number, string>;
export function lastIndexOf<A, S extends A = A>(searchValue: S, position?: number): Fn<number, ReadonlyArray<A>>;
export function lastIndexOf(searchValue: any, position = -1): Fn<number, any> {
	return (input) => input.lastIndexOf(searchValue, position);
}
