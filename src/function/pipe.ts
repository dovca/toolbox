import type {Fn, Maybe, Nullable} from '../types/utils';
import {reduce} from '../array/reduce';
import {isNullish} from '../predicate/isNullish';

export function pipe<T>(): Fn<T>;
export function pipe<A, B>(f1: Fn<B, A>): Fn<B, A>;
export function pipe<A, B, C>(f1: Fn<B, A>, f2: Fn<C, B>): Fn<C, A>;
export function pipe<A, B, C, D>(f1: Fn<B, A>, f2: Fn<C, B>, f3: Fn<D, C>): Fn<D, A>;
export function pipe<A, B, C, D, E>(f1: Fn<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>): Fn<E, A>;
export function pipe<A, B, C, D, E, F>(f1: Fn<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>): Fn<F, A>;
export function pipe<A, B, C, D, E, F, G>(f1: Fn<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>): Fn<G, A>;
export function pipe<A, B, C, D, E, F, G, H>(f1: Fn<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>, f7: Fn<H, G>): Fn<H, A>;
export function pipe<A, B, C, D, E, F, G, H, I>(f1: Fn<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>, f7: Fn<H, G>, f8: Fn<I, H>): Fn<I, A>;
export function pipe(...fns: Fn<any>[]): Fn<any>;
export function pipe(...fns: Fn<any>[]): Fn<any> {
	return (value) => reduce<any>((x, f) => f(x), value)(fns);
}

export function optionalPipe<T>(): Fn<T>;
export function optionalPipe<A, B>(f1: Fn<B, A>): Fn<Maybe<B>, Nullable<A>>;
export function optionalPipe<A, B, C>(f1: Fn<B, A>, f2: Fn<C, B>): Fn<Maybe<C>, Nullable<A>>;
export function optionalPipe<A, B, C, D>(f1: Fn<B, A>, f2: Fn<C, B>, f3: Fn<D, C>): Fn<Maybe<D>, Nullable<A>>;
export function optionalPipe<A, B, C, D, E>(f1: Fn<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>): Fn<Maybe<E>, Nullable<A>>;
export function optionalPipe<A, B, C, D, E, F>(f1: Fn<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>): Fn<Maybe<F>, Nullable<A>>;
export function optionalPipe<A, B, C, D, E, F, G>(f1: Fn<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>): Fn<Maybe<G>, Nullable<A>>;
export function optionalPipe<A, B, C, D, E, F, G, H>(f1: Fn<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>, f7: Fn<H, G>): Fn<Maybe<H>, Nullable<A>>;
export function optionalPipe<A, B, C, D, E, F, G, H, I>(f1: Fn<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>, f7: Fn<H, G>, f8: Fn<I, H>): Fn<Maybe<I>, Nullable<A>>;
export function optionalPipe(...fns: Fn<any>[]): Fn<any>;
export function optionalPipe(...fns: Fn<any>[]): Fn<any> {
	return (value) => isNullish(value)
		? undefined
		: pipe(...fns)(value);
}
