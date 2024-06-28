import type {Fn} from '../types/utils';
import {isValidIndex} from '../predicate/isValidIndex';
import {modulo} from '../number/arithmetic';

export function charAt(index: number): Fn<string> {
	return (input) => isValidIndex(index)(input)
		? input.charAt(modulo(input.length)(index))
		: '';
}
