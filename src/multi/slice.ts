import {type Slice, slice as typedSlice} from 'string-ts';
import type {AnyArray, Fn, Negative} from '../types/utils';
import type {First, Shift} from '../types/array';
import {isArray} from '../predicate/isArray';

function arraySlice<T>(start?: number, end?: number): Fn<T[], readonly T[]> {
	return (values) => values.slice(start, end);
}

function stringSlice<T extends string, S extends number = 0, E extends number = -1>(start?: S, end?: E): Fn<Slice<T, S, E>, T> {
	return (input) => typedSlice(input, start, end);
}

/**
 * Produces a copy of the input string by slicing it from start to end. All characters are included.
 * @returns Produces the same string.
 * @example
 * ```typescript
 * slice()('hello'); // 'hello'
 * ```
 */
export function slice<T extends string>(): Fn<Slice<T, 0, -1>, T>;
/**
 * Produces a new string by slicing the input string from `start` onwards.
 * @param start The index to start slicing from. 0 corresponds to the start of the string.
 * @returns Produces a new string.
 * @example
 * ```typescript
 * slice(3)('hello'); // 'lo'
 * ```
 */
export function slice<T extends string, S extends number>(start: S): Fn<Slice<T, S, -1>, T>;
/**
 * Produces a new string by slicing the input string from `start` to `end`.
 * @param start The index to start slicing from. 0 corresponds to the start of the string.
 * @param end The index to stop slicing at. -1 corresponds to the end of the string.
 * @returns Produces a new string.
 * @example
 * ```typescript
 * slice(1, 4)('hello'); // 'ell'
 * slice(1, -2)('hello'); // 'ell'
 * ```
 */
export function slice<T extends string, S extends number, E extends number>(start: S, end: E): Fn<Slice<T, S, E>, T>;
/**
 * Produces a new array by slicing the input array from `start` to `end`.
 * @param start The index to start slicing from. 0 corresponds to the start of the array.
 * @param end The index to stop slicing at. -1 corresponds to the end of the array.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * slice(1, 4)([1, 2, 3, 4, 5]); // [2, 3, 4]
 * slice(1, -2)([1, 2, 3, 4, 5]); // [2, 3]
 * ```
 */
export function slice<T extends AnyArray>(start?: number, end?: number): Fn<T>;
export function slice(start?: number, end?: number): Fn<unknown[]> | Fn<string> {
	return ((input: unknown) => {
		if (typeof input === 'string') {
			return stringSlice(start, end)(input);
		} else if (isArray(input)) {
			return arraySlice(start, end)(input);
		} else {
			throw new Error(`slice: Expected input to be a string or an array. Got ${typeof input}.`);
		}
	}) as Fn<unknown[], readonly unknown[]> | Fn<string>;
}

/**
 * Produces a new string that contains the first `count` characters of the input string.
 * @param count The number of characters to include from the start of the string. Defaults to 1.
 * @returns Produces a new string.
 * @example
 * ```typescript
 * head(3)('hello'); // 'hel'
 * ```
 */
export function head<T extends string, N extends number>(count?: N): Fn<Slice<T, 0, N>, T>;
/**
 * Produces a new array that contains the first `count` elements of the input array.
 * @param count The number of elements to include from the start of the array. Defaults to 1.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * head(3)([1, 2, 3, 4, 5]); // [1, 2, 3]
 * ```
 */
export function head<T extends readonly any[]>(count?: number): Fn<T>;
export function head(count: number = 1): Fn<string> | Fn<unknown[]> {
	return (input: any) => slice(0, count)(input);
}

/**
 * Produces a new string that contains the last `count` characters of the input string.
 * @param count The number of characters to include from the end of the string. Defaults to 1.
 * @returns Produces a new string.
 * @example
 * ```typescript
 * tail(3)('hello'); // 'llo'
 * ```
 */
export function tail<T extends string, N extends number>(count?: N): Fn<Slice<T, Negative<N>>, T>;
/**
 * Produces a new array that contains the last `count` elements of the input array.
 * @param count The number of elements to include from the end of the array. Defaults to 1.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * tail(3)([1, 2, 3, 4, 5]); // [3, 4, 5]
 * ```
 */
export function tail<T extends readonly any[]>(count?: number): Fn<T>;
export function tail(count: number = 1): Fn<string> | Fn<unknown[]> {
	return (input: any) => slice(-count)(input);
}

/**
 * Returns the first character and the rest of a string as a tuple resembling the removed "head" and the rest.
 * @param value The string to decapitate.
 * @returns The separated head and the rest of the string.
 * @example
 * ```typescript
 * decapitate('hello'); // ['h', 'ello']
 * ```
 */
export function decapitate<T extends string>(value: T): [Slice<T, 0, 1>, Slice<T, 1>];
/**
 * Returns the first element and the rest of an array as a tuple resembling the removed "head" and the rest.
 * @param values The array to decapitate.
 * @returns The separated head and the rest of the array.
 * @example
 * ```typescript
 * decapitate([1, 2, 3]); // [1, [2, 3]]
 * ```
 */
export function decapitate<T extends readonly any[]>(values: T): [First<T>, Shift<T>];
export function decapitate<T extends string | readonly any[]>(values: T): [string, string] | [any, any[]] {
	return typeof values === 'string'
		? [values.slice(0, 1), values.slice(1)]
		: [values[0], values.slice(1)];
}
