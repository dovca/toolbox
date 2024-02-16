import type {Fn} from '../types';
import {isValidIndex} from '../predicate';
import {modulo} from '../number';

export function charAt(index: number): Fn<string> {
	return (input) => isValidIndex(index)(input)
		? input.charAt(modulo(input.length)(index))
		: '';
}
