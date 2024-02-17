import type {Fn} from '../types';
import {removeAll} from '../array';

export function indexOf(searchValue: string, position?: number): Fn<number, string | ReadonlyArray<string>>;
export function indexOf<T>(searchValue: T, position?: number): Fn<number, T[]>;
export function indexOf(searchValue: any, position?: number): Fn<number, any> {
	const args = removeAll(undefined)([searchValue, position]);
	return (input) => input.indexOf.apply(input, args);
}
