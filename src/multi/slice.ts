import type {Fn} from '../types';
import {type Slice, slice as typedSlice} from 'string-ts';
import {isArray} from '../predicate';

function arraySlice<T>(start?: number, end?: number): Fn<T[], ReadonlyArray<T>> {
	return (values) => values.slice(start, end);
}

function stringSlice<T extends string, S extends number = 0, E extends number = -1>(start?: S, end?: E): Fn<Slice<T, S, E>, T> {
	return (input) => typedSlice(input, start, end);
}

export function slice<T>(start?: number, end?: number): Fn<T[], ReadonlyArray<T>>;
export function slice<T extends string, S extends number = 0, E extends number = -1>(start?: S, end?: E): Fn<Slice<T, S, E>, T>;
export function slice(start?: number, end?: number): Fn<unknown[], ReadonlyArray<unknown>> | Fn<string> {
	return ((input: unknown) => {
		if (typeof input === 'string') {
			return stringSlice(start, end)(input);
		} else if (isArray<unknown>(input)) {
			return arraySlice(start, end)(input);
		} else {
			throw new Error(`slice: Expected input to be a string or an array. Got ${typeof input}.`);
		}
	}) as Fn<unknown[], ReadonlyArray<unknown>> | Fn<string>;
}
