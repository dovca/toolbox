import type {Fn} from '../types/types';

export function concat<T, U = T>(array: U[]): Fn<ReadonlyArray<T>, (T | U)[]> {
  return (input) => [...input, ...array];
}
