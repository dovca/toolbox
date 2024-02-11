import type {Fn} from '../types';

export function indexOf(searchValue: string, position?: number): Fn<number, string>;
export function indexOf<T>(searchValue: T, position?: number): Fn<number, T[]>;
export function indexOf(searchValue: any, position?: number): Fn<number, any> {
	return (input) => input.indexOf(searchValue, position);
}
