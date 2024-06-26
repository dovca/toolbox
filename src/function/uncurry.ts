import type {Fn, Fn2, Fn3, Fn4, Fn5} from '../types/utils';

/**
 * Transforms a curried function into a function that accepts all its arguments at once.
 * @param fn The curried function to uncurry.
 * @returns The uncurried n-ary function.
 */

export function uncurry<R, A, B, C, D, E>(fn: Fn<Fn<Fn<Fn<Fn<R, E>, D>, C>, B>, A>): Fn5<R, A, B, C, D, E>;
export function uncurry<R, A, B, C, D>(fn: Fn<Fn<Fn<Fn<R, D>, C>, B>, A>): Fn4<R, A, B, C, D>;
export function uncurry<R, A, B, C>(fn: Fn<Fn<Fn<R, C>, B>, A>): Fn3<R, A, B, C>;
export function uncurry<R, A, B>(fn: Fn<Fn<R, B>, A>): Fn2<R, A, B>;
export function uncurry<R, A = void>(fn: Fn<R, A>): Fn<R, A>;
export function uncurry(fn: Fn<any>): (...args: any[]) => any;
export function uncurry(fn: Fn<any>): (...args: any[]) => any {
	return (...args) => args.length
		? args.reduce((f, x) => f(x), fn)
		: (fn as Fn<any, void>)();
}
