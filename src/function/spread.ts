import type {Fn, Fn2, Fn3, Fn4, Fn5} from '../types/utils';

/**
 * Spread the flowing array of values as arguments for the given function.
 * @example
 * ```typescript
 * spread((a: number, b: number) => a + b)([1, 2]); // 3
 * ```
 */
export function spread<R, A>(fn: Fn<R, A>): Fn<R, A>;
export function spread<R, A, B>(fn: Fn2<R, A, B>): Fn<R, [A, B]>;
export function spread<R, A, B, C>(fn: Fn3<R, A, B, C>): Fn<R, [A, B, C]>;
export function spread<R, A, B, C, D>(fn: Fn4<R, A, B, C, D>): Fn<R, [A, B, C, D]>;
export function spread<R, A, B, C, D, E>(fn: Fn5<R, A, B, C, D, E>): Fn<R, [A, B, C, D, E]>;
export function spread<R>(fn: (...args: any[]) => R): Fn<R, any[]> {
	return (args) => fn(...args);
}
