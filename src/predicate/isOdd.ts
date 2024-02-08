import {modulo} from '../number/arithmetic';

export function isOdd(value: number): boolean {
	return modulo(2)(value) === 1;
}
