import type {Fn, Fn2, Fn3, Fn4, Fn5} from '../types';

/**
 * Treats the given values as a function and its arguments and calls it.
 * @param args The function and its arguments.
 */
export function command<R>(args: [Fn<R, void>]): R;
export function command<R, A>(args: [Fn<R, A>, A]): R;
export function command<R, A, B>(args: [Fn2<R, A, B>, A, B]): R;
export function command<R, A, B, C>(args: [Fn3<R, A, B, C>, A, B, C]): R;
export function command<R, A, B, C, D>(args: [Fn4<R, A, B, C, D>, A, B, C, D]): R;
export function command<R, A, B, C, D, E>(args: [Fn5<R, A, B, C, D, E>, A, B, C, D, E]): R;
export function command<R>(args: [Fn<R, any[]>, ...any[]]): R;
export function command([fn, ...args]: [Function, ...any[]]): any {
	return fn(...args);
}
