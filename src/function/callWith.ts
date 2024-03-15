import type {Fn, FnN} from '../types';

export function callWith<R, A>(...args: [A]): Fn<R, FnN<R, [A]>>;
export function callWith<R, A, B>(...args: [A, B]): Fn<R, FnN<R, [A, B]>>;
export function callWith<R, A, B, C>(...args: [A, B, C]): Fn<R, FnN<R, [A, B, C]>>;
export function callWith<R, A, B, C, D>(...args: [A, B, C, D]): Fn<R, FnN<R, [A, B, C, D]>>;
export function callWith<R, A, B, C, D, E>(...args: [A, B, C, D, E]): Fn<R, FnN<R, [A, B, C, D, E]>>;
export function callWith<R, P extends readonly any[]>(...args: P): Fn<R, FnN<R, P>>;
export function callWith(...args: readonly any[]): <R>(fn: (...args: readonly any[]) => R) => R {
	return (fn) => fn(...args);
}
