import type {Fn} from '../types';

export function match(regexp: string | RegExp): Fn<RegExpMatchArray | null, string> {
  return (input) => input.match(regexp);
}
