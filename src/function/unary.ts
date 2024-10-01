import type {AnyArray, Fn} from '../types/utils';

/**
 * Caps the number of arguments to the function to one. All other arguments are ignored.
 */
export function unary<T, R>(fn: (arg: T, ...rest: AnyArray) => R): Fn<R, T> {
  return (arg) => fn(arg);
}
