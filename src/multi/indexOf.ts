import type {Fn} from '../types';
import {discard} from '../array';

export function indexOf(searchValue: string, position?: number): Fn<number, string>;
export function indexOf<T>(searchValue: T, position?: number): Fn<number, T[]>;
export function indexOf(searchValue: string, position?: number): Fn<number, string | any[]> {
	const args = discard(undefined)([searchValue, position] as const);
	// @ts-expect-error - `...args` is a type-safe spread, because it is a union of tuples
	// https://github.com/microsoft/TypeScript/issues/49700
	return (input) => input.indexOf(...args);
}
