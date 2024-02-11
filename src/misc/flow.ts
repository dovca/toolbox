import type {Fn} from '../types/types';

export function flow<V>(value: V): V;
export function flow<V, A>(value: V, ...fns: [Fn<A, V>]): A;
export function flow<V, A, B>(value: V, ...fns: [Fn<A, V>, Fn<B, A>]): B;
export function flow<V, A, B, C>(value: V, ...fns: [Fn<A, V>, Fn<B, A>, Fn<C, B>]): C;
export function flow<V, A, B, C, D>(value: V, ...fns: [Fn<A, V>, Fn<B, A>, Fn<C, B>, Fn<D, C>]): D;
export function flow<V, A, B, C, D, E>(value: V, ...fns: [Fn<A, V>, Fn<B, A>, Fn<C, B>, Fn<D, C>, Fn<E, D>]): E;
export function flow<V, A, B, C, D, E, F>(value: V, ...fns: [Fn<A, V>, Fn<B, A>, Fn<C, B>, Fn<D, C>, Fn<E, D>, Fn<F, E>]): F;
export function flow<V, A, B, C, D, E, F, G>(value: V, ...fns: [Fn<A, V>, Fn<B, A>, Fn<C, B>, Fn<D, C>, Fn<E, D>, Fn<F, E>, Fn<G, F>]): G;
export function flow<V, A, B, C, D, E, F, G, H>(value: V, ...fns: [Fn<A, V>, Fn<B, A>, Fn<C, B>, Fn<D, C>, Fn<E, D>, Fn<F, E>, Fn<G, F>, Fn<H, G>]): H;
export function flow<V, A, B, C, D, E, F, G, H, I>(value: V, ...fns: [Fn<A, V>, Fn<B, A>, Fn<C, B>, Fn<D, C>, Fn<E, D>, Fn<F, E>, Fn<G, F>, Fn<H, G>, Fn<I, H>]): I;
export function flow<V, A, B, C, D, E, F, G, H, I, J>(value: V, ...fns: [Fn<A, V>, Fn<B, A>, Fn<C, B>, Fn<D, C>, Fn<E, D>, Fn<F, E>, Fn<G, F>, Fn<H, G>, Fn<I, H>, Fn<J, I>]): J;
export function flow(value: any, ...fns: Fn<any>[]): any {
	return fns.reduce((x, f) => f(x), value);
}
