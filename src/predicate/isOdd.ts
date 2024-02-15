import {modulo} from '../number';

export function isOdd(value: number): boolean {
	return modulo(2)(value) === 1;
}
