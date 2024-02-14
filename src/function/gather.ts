import type {Fn, Fn2, Fn3, Fn4, Fn5} from '../types';
import {identity} from '../misc';

/**
 * Gathers a set of arguments and passes them to a function as a tuple.
 * @param fn The function to gather the arguments for. Defaults to the identity function.
 * @returns The result of the function.
 */
export function gather(): Fn<[], void>;
export function gather<A>(): Fn<[A], A>;
export function gather<R, A>(fn: Fn<R, [A]>): Fn<R, A>;
export function gather<A, B>(): Fn2<[A, B], A, B>;
export function gather<R, A, B>(fn: Fn<R, [A, B]>): Fn2<R, A, B>;
export function gather<A, B, C>(): Fn3<[A, B, C], A, B, C>;
export function gather<R, A, B, C>(fn: Fn<R, [A, B, C]>): Fn3<R, A, B, C>;
export function gather<A, B, C, D>(): Fn4<[A, B, C, D], A, B, C, D>;
export function gather<R, A, B, C, D>(fn: Fn<R, [A, B, C, D]>): Fn4<R, A, B, C, D>;
export function gather<A, B, C, D, E>(): Fn5<[A, B, C, D, E], A, B, C, D, E>;
export function gather<R, A, B, C, D, E>(fn: Fn<R, [A, B, C, D, E]>): Fn5<R, A, B, C, D, E>;
export function gather<R>(fn?: (args: any[]) => R): Fn<R, any[]>;
export function gather<R>(fn: Fn<R, any> = identity): (...args: any[]) => R {
	return (...args) => fn(args);
}
