import type {Fn} from '../types/types';

export function match(regexp: string | RegExp): Fn<string, RegExpMatchArray | null> {
  return (input) => input.match(regexp);
}
