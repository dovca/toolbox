import type {Fn} from '../types/types';

export function flow<V>(value: V): V;
export function flow<V, A>(value: V, ...fns: [Fn<V, A>]): A;
export function flow<V, A, B>(value: V, ...fns: [Fn<V, A>, Fn<A, B>]): B;
export function flow<V, A, B, C>(value: V, ...fns: [Fn<V, A>, Fn<A, B>, Fn<B, C>]): C;
export function flow<V, A, B, C, D>(value: V, ...fns: [Fn<V, A>, Fn<A, B>, Fn<B, C>, Fn<C, D>]): D;
export function flow<V, A, B, C, D, E>(value: V, ...fns: [Fn<V, A>, Fn<A, B>, Fn<B, C>, Fn<C, D>, Fn<D, E>]): E;
export function flow<V, A, B, C, D, E, F>(value: V, ...fns: [Fn<V, A>, Fn<A, B>, Fn<B, C>, Fn<C, D>, Fn<D, E>, Fn<E, F>]): F;
export function flow<V, A, B, C, D, E, F, G>(value: V, ...fns: [Fn<V, A>, Fn<A, B>, Fn<B, C>, Fn<C, D>, Fn<D, E>, Fn<E, F>, Fn<F, G>]): G;
export function flow<V, A, B, C, D, E, F, G, H>(value: V, ...fns: [Fn<V, A>, Fn<A, B>, Fn<B, C>, Fn<C, D>, Fn<D, E>, Fn<E, F>, Fn<F, G>, Fn<G, H>]): H;
export function flow<V, A, B, C, D, E, F, G, H, I>(value: V, ...fns: [Fn<V, A>, Fn<A, B>, Fn<B, C>, Fn<C, D>, Fn<D, E>, Fn<E, F>, Fn<F, G>, Fn<G, H>, Fn<H, I>]): I;
export function flow<V, A, B, C, D, E, F, G, H, I, J>(value: V, ...fns: [Fn<V, A>, Fn<A, B>, Fn<B, C>, Fn<C, D>, Fn<D, E>, Fn<E, F>, Fn<F, G>, Fn<G, H>, Fn<H, I>, Fn<I, J>]): J;
export function flow(value: any, ...fns: Fn<any>[]): any {
	return fns.reduce((x, f) => f(x), value);
}
