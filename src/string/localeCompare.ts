import type {Fn} from '../types/types';

export function localeCompare(that: string): Fn<string, number> {
  return (input) => input.localeCompare(that);
}
