import type {Fn} from '../types/types';

export function indexOf(substring: string, position?: number): Fn<string, number> {
  return (input) => input.indexOf(substring, position);
}
