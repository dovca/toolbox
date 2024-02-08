import type {Fn} from '../types/types';

export function lastIndexOf(search: string, position?: number): Fn<string, number> {
  return (input) => input.lastIndexOf(search, position);
}
