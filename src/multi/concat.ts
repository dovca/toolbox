import type {Fn} from '../types';

function arrayConcat<T, U = T>(array: U[]): Fn<(T | U)[], ReadonlyArray<T>> {
	return (input) => [...input, ...array];
}

function stringConcat(str: string): Fn<string> {
	return (input) => input + str;
}

export function concat<T, U = T>(array: U[]): Fn<(T | U)[], ReadonlyArray<T>>;
export function concat(str: string): Fn<string>;
export function concat(str: string): Fn<string, any>;
export function concat(arg: any): Fn<string | any[], any> {
	return (input) => typeof arg === 'string'
		? stringConcat(arg)(input)
		: arrayConcat(arg)(input);
}
