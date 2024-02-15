import type {Fn} from '../types';
import {isValidIndex} from '../predicate';
import {toNormalizedIndex} from '../convert';

export function charAt(index: number): Fn<string> {
	return (input) => isValidIndex(index)(input)
		? input.charAt(toNormalizedIndex(index)(input.length))
		: '';
}
