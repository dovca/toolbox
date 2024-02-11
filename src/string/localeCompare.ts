import type {Fn} from '../types';

export function localeCompare(other: string): Fn<number, string> {
  return (input) => input.localeCompare(other);
}
