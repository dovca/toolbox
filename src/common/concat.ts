import {concat as arrayConcat} from '../array';
import {concat as stringConcat} from '../string';
import type {Fn} from '../types/types';

export function concat(value: string): Fn<string>;
export function concat<T, U = T>(values: U[]): Fn<T[], (T | U)[]>;
export function concat(val: any): Fn<any> {
	return (input) => {
		if (typeof input === 'string' && typeof val === 'string') {
			return stringConcat(val)(input);
		}
		if (typeof Array.isArray(input) && Array.isArray(val)) {
			return arrayConcat(val)(input);
		}
		throw new Error('concat: input and value must be of the same type.');
	};
}
