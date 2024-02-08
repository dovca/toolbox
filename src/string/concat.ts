import type {Fn} from '../types/types';

export function concat(other: string): Fn<string> {
  return (input) => input.concat(other);
}
