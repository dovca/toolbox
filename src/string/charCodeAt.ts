import type {Fn} from '../types';

export function charCodeAt(index: number): Fn<number, string> {
  return (input) => input.charCodeAt(index);
}
