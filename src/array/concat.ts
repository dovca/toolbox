import type {Fn} from '../types/types';

export function concat<T, U = T>(array: U[]): Fn<(T | U)[], ReadonlyArray<T>> {
  return (input) => [...input, ...array];
}
