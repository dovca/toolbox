import type {Fn} from '../types/utils';
import {isValidIndex} from '../predicate/isValidIndex';
import {modulo} from '../number/arithmetic';

/**
 * Produces the single character of the flowing string at the given index. If the index is negative, it counts from the
 * end of the string with -1 being the last character. If the index is out of bounds, an empty string is returned.
 * @param index The index of the character to get.
 * @returns Produces the character at the given index.
 * @example
 * ```typescript
 * charAt(1)('abc'); // 'b'
 * charAt(-1)('abc'); // 'c'
 * charAt(3)('abc'); // ''
 * ```
 */
export function charAt(index: number): Fn<string> {
	return (input) => isValidIndex(index)(input)
		? input.charAt(modulo(input.length)(index))
		: '';
}
