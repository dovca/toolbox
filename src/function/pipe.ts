import type {Fn} from '../types/types';
import {reduce} from '../array';

export function pipe<T>(): Fn<T, T>;
export function pipe<A, B>(f1: Fn<A, B>): Fn<A, B>;
export function pipe<A, B, C>(f1: Fn<A, B>, f2: Fn<B, C>): Fn<A, C>;
export function pipe<A, B, C, D>(f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>): Fn<A, D>;
export function pipe<A, B, C, D, E>(f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>): Fn<A, E>;
export function pipe<A, B, C, D, E, F>(f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>): Fn<A, F>;
export function pipe<A, B, C, D, E, F, G>(f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>): Fn<A, G>;
export function pipe<A, B, C, D, E, F, G, H>(f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>, f7: Fn<G, H>): Fn<A, H>;
export function pipe<A, B, C, D, E, F, G, H, I>(f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>, f7: Fn<G, H>, f8: Fn<H, I>): Fn<A, I>;
export function pipe(...fns: Fn<any>[]): Fn<any> {
	return (value) => reduce<any>((x, f) => f(x), value)(fns);
}
