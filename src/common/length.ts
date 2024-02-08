import type {Fn} from '../types/types';
import {length as arrayLength} from '../array/length';
import {length as stringLength} from '../string/length';

export function length(): Fn<string | any[], number> {
	return (input) => typeof input === 'string'
		? stringLength(input)
		: arrayLength(input);
}
