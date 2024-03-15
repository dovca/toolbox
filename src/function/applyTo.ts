import type {Fn, Fn0, Fn2, Fn3, Fn4, Fn5, FnN} from '../types';

/**
 * Call a flowing function with the given values.
 * @param values The values to applyTo the function with.
 */
export function applyTo(): <R>(fn: Fn0<R>) => R;
export function applyTo<A>(...values: [A]): <R>(fn: Fn<R, A>) => R;
export function applyTo<A, B>(...values: [A, B]): <R>(fn: Fn2<R, A, B>) => R;
export function applyTo<A, B, C>(...values: [A, B, C]): <R>(fn: Fn3<R, A, B, C>) => R;
export function applyTo<A, B, C, D>(...values: [A, B, C, D]): <R>(fn: Fn4<R, A, B, C, D>) => R;
export function applyTo<A, B, C, D, E>(...values: [A, B, C, D, E]): <R>(fn: Fn5<R, A, B, C, D, E>) => R;
export function applyTo<P extends readonly any[]>(...values: P): <R>(fn: FnN<R, P>) => R;
export function applyTo<R>(...values: any[]): Fn<R, FnN<R, any[]>> {
	return (fn) => fn(...values);
}
