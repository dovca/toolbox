import type {Fn, Fn2, Fn3, Fn4, Fn5} from '../types/types';

export function spread<A, R>(fn: Fn<A, R>): Fn<A, R>;
export function spread<A, B, R>(fn: Fn2<A, B, R>): Fn<[A, B], R>;
export function spread<A, B, C, R>(fn: Fn3<A, B, C, R>): Fn<[A, B, C], R>;
export function spread<A, B, C, D, R>(fn: Fn4<A, B, C, D, R>): Fn<[A, B, C, D], R>;
export function spread<A, B, C, D, E, R>(fn: Fn5<A, B, C, D, E, R>): Fn<[A, B, C, D, E], R>;
export function spread<R>(fn: (...args: any[]) => R): (args: any[]) => R {
	return (args) => fn(...args);
}
