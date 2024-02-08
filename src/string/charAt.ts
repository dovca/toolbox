import type {Fn} from '../types/types';

export function charAt(index: number): Fn<string> {
  return (input) => input.charAt(index);
}
