import type {Fn} from '../types';
import {isValidIndex} from '../predicate';
import {modulo} from '../number';

export function charCodeAt(index: number): Fn<number, string> {
  return (input) => isValidIndex(index)(input)
      ? input.charCodeAt(modulo(input.length)(index))
      : NaN;
}
