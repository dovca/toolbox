import type {Fn} from '../types';
import {isValidIndex} from '../predicate';
import {toNormalizedIndex} from '../convert';

export function charCodeAt(index: number): Fn<number, string> {
  return (input) => isValidIndex(index)(input)
      ? input.charCodeAt(toNormalizedIndex(index)(input.length))
      : NaN;
}
