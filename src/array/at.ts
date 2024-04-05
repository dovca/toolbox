import type {Fn} from '../types';
import {modulo} from '../number';
import {isValidIndex} from '../predicate';

export function at<T>(index: number): Fn<T, readonly T[]>;
export function at<T extends undefined>(index: number): Fn<T | undefined, readonly T[]>;
export function at<T>(index: number): Fn<T | undefined, readonly T[]> {
	return (values) => isValidIndex(index)(values)
		? values[modulo(values.length)(index)]
		: undefined;
}
