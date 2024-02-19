import type {Fn, Fn2, Fn3, Fn4, Fn5} from '../types';

export function run<R>(p: [Fn<R, void>]): R;
export function run<R, A>(p: [Fn<R, A>, A]): R;
export function run<R, A, B>(p: [Fn2<R, A, B>, A, B]): R;
export function run<R, A, B, C>(p: [Fn3<R, A, B, C>, A, B, C]): R;
export function run<R, A, B, C, D>(p: [Fn4<R, A, B, C, D>, A, B, C, D]): R;
export function run<R, A, B, C, D, E>(p: [Fn5<R, A, B, C, D, E>, A, B, C, D, E]): R;
export function run<R>(p: [Fn<R, any[]>, ...any[]]): R;
export function run([fn, ...args]: [Function, ...any[]]): any {
	return fn(...args);
}
