import type {Fn} from '../types/utils';
import {isValidIndex} from '../predicate/isValidIndex';
import {modulo} from '../number/arithmetic';

export function charCodeAt(index: number): Fn<number, string> {
  return (input) => isValidIndex(index)(input)
      ? input.charCodeAt(modulo(input.length)(index))
      : NaN;
}
