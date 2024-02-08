import type {Fn} from '../types/types';

export function charCodeAt(index: number): Fn<string, number> {
  return (input) => input.charCodeAt(index);
}
