import type {Fn} from '../types';
import {modulo} from '../number';

export function toNormalizedIndex(index: number): Fn<number> {
	return (length) => modulo(length)(index);
}
