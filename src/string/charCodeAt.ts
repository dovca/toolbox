import type {Fn} from '../types/utils';
import {isValidIndex} from '../predicate/isValidIndex';
import {modulo} from '../number/arithmetic';

/**
 * Produces the Unicode code point of the character at the given index. If the index is negative, it counts from the
 * end of the string with -1 being the last character. If the index is out of bounds, `NaN` is returned.
 * @param index The index of the character to get.
 * @returns Produces the Unicode code point of the character at the given index.
 * @example
 * ```typescript
 * charCodeAt(1)('abc'); // 98
 * charCodeAt(-1)('abc'); // 99
 * charCodeAt(3)('abc'); // NaN
 * ```
 */
export function charCodeAt(index: number): Fn<number, string> {
  return (input) => isValidIndex(index)(input)
      ? input.charCodeAt(modulo(input.length)(index))
      : NaN;
}
