import type {Fn, Fn2, Fn3, Fn4, Fn5} from '../types/utils';

/**
 * Curries the given function.
 * @param fn
 */
export function curry<R>(fn: Fn<R, void>): Fn<R, void>;
export function curry<R, P1>(fn: Fn<R, P1>): Fn<R, P1>;
export function curry<R, P1, P2>(fn: Fn2<R, P1, P2>): Fn<Fn<R, P2>, P1>;
export function curry<R, P1, P2, P3>(fn: Fn3<R, P1, P2, P3>): Fn<Fn<Fn<R, P3>, P2>, P1>;
export function curry<R, P1, P2, P3, P4>(fn: Fn4<R, P1, P2, P3, P4>): Fn<Fn<Fn<Fn<R, P4>, P3>, P2>, P1>;
export function curry<R, P1, P2, P3, P4, P5>(fn: Fn5<R, P1, P2, P3, P4, P5>): Fn<Fn<Fn<Fn<Fn<R, P5>, P4>, P3>, P2>, P1>;
export function curry(fn: (...args: any[]) => any): (...args: any[]) => any {
	return (input) => fn.length <= 1
		? fn(input)
		: curry(fn.bind(null, input));
}
