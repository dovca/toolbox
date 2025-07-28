import type {Fn, FnChain, Maybe, Nullable} from '../types/utils';
import {isNullish} from '../predicate/isNullish';

export function pipe<T>(): Fn<T>;
export function pipe<A, B>(...fns: FnChain<[A, B]>): Fn<B, A>;
export function pipe<A, B, C>(...fns: FnChain<[A, B, C]>): Fn<C, A>;
export function pipe<A, B, C, D>(...fns: FnChain<[A, B, C, D]>): Fn<D, A>;
export function pipe<A, B, C, D, E>(...fns: FnChain<[A, B, C, D, E]>): Fn<E, A>;
export function pipe<A, B, C, D, E, F>(...fns: FnChain<[A, B, C, D, E, F]>): Fn<F, A>;
export function pipe<A, B, C, D, E, F, G>(...fns: FnChain<[A, B, C, D, E, F, G]>): Fn<G, A>;
export function pipe<A, B, C, D, E, F, G, H>(...fns: FnChain<[A, B, C, D, E, F, G, H]>): Fn<H, A>;
export function pipe<A, B, C, D, E, F, G, H, I>(...fns: FnChain<[A, B, C, D, E, F, G, H, I]>): Fn<I, A>;
export function pipe(...fns: Fn<any>[]): Fn<any>;
export function pipe(...fns: Fn<any>[]): Fn<any> {
	return (value) => {
		for (const fn of fns) {
			value = fn(value);
		}
		return value;
	}
}

export function optionalPipe<T>(): Fn<T>;
export function optionalPipe<A, B>(...fns: FnChain<[A, B]>): Fn<Maybe<B>, Nullable<A>>;
export function optionalPipe<A, B, C>(...fns: FnChain<[A, B, C]>): Fn<Maybe<C>, Nullable<A>>;
export function optionalPipe<A, B, C, D>(...fns: FnChain<[A, B, C, D]>): Fn<Maybe<D>, Nullable<A>>;
export function optionalPipe<A, B, C, D, E>(...fns: FnChain<[A, B, C, D, E]>): Fn<Maybe<E>, Nullable<A>>;
export function optionalPipe<A, B, C, D, E, F>(...fns: FnChain<[A, B, C, D, E, F]>): Fn<Maybe<F>, Nullable<A>>;
export function optionalPipe<A, B, C, D, E, F, G>(...fns: FnChain<[A, B, C, D, E, F, G]>): Fn<Maybe<G>, Nullable<A>>;
export function optionalPipe<A, B, C, D, E, F, G, H>(...fns: FnChain<[A, B, C, D, E, F, G, H]>): Fn<Maybe<H>, Nullable<A>>;
export function optionalPipe<A, B, C, D, E, F, G, H, I>(...fns: FnChain<[A, B, C, D, E, F, G, H, I]>): Fn<Maybe<I>, Nullable<A>>;
export function optionalPipe(...fns: Fn<any>[]): Fn<any>;
export function optionalPipe(...fns: Fn<any>[]): Fn<any> {
	return (value) => isNullish(value)
		? undefined
		: pipe(...fns)(value);
}
