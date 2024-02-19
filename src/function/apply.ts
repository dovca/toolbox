import type {Fn, Fn2, Fn3, Fn4, Fn5} from '../types';

export function apply<R>(fn: Fn<R, void>): Fn<R, []>;
export function apply<R, A>(fn: Fn<R, A>): Fn<R, [A]>;
export function apply<R, A, B>(fn: Fn2<R, A, B>): Fn<R, [A, B]>;
export function apply<R, A, B, C>(fn: Fn3<R, A, B, C>): Fn<R, [A, B, C]>;
export function apply<R, A, B, C, D>(fn: Fn4<R, A, B, C, D>): Fn<R, [A, B, C, D]>;
export function apply<R, A, B, C, D, E>(fn: Fn5<R, A, B, C, D, E>): Fn<R, [A, B, C, D, E]>;
export function apply(fn: (...args: any[]) => any): Fn<any, any[]>;
export function apply(fn: (...args: any[]) => any): Fn<any, any[]> {
	return (args) => fn.apply(null, args);
}
