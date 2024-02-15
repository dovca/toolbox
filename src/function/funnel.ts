import {gather} from './gather';
import {pipe} from './pipe';
import {spread} from './spread';

import type {Fn, FnT1, FnT2, FnT3, FnT4, FnT5, T1, T2, T3, T4, T5} from '../types';

export function funnel<A extends T1, B>(f1: FnT1<B, A>): FnT1<B, A>;
export function funnel<A extends T1, B, C>(f1: FnT1<B, A>, f2: Fn<C, B>): FnT1<C, A>;
export function funnel<A extends T1, B, C, D>(f1: FnT1<B, A>, f2: Fn<C, B>, f3: Fn<D, C>): FnT1<D, A>;
export function funnel<A extends T1, B, C, D, E>(f1: FnT1<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>): FnT1<E, A>;
export function funnel<A extends T1, B, C, D, E, F>(f1: FnT1<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>): FnT1<F, A>;
export function funnel<A extends T1, B, C, D, E, F, G>(f1: FnT1<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>): FnT1<G, A>;
export function funnel<A extends T1, B, C, D, E, F, G, H>(f1: FnT1<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>, f7: Fn<H, G>): FnT1<H, A>;
export function funnel<A extends T1, B, C, D, E, F, G, H, I>(f1: FnT1<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>, f7: Fn<H, G>, f8: Fn<I, H>): FnT1<I, A>;

export function funnel<A extends T2, B>(f1: FnT2<B, A>): FnT2<B, A>;
export function funnel<A extends T2, B, C>(f1: FnT2<B, A>, f2: Fn<C, B>): FnT2<C, A>;
export function funnel<A extends T2, B, C, D>(f1: FnT2<B, A>, f2: Fn<C, B>, f3: Fn<D, C>): FnT2<D, A>;
export function funnel<A extends T2, B, C, D, E>(f1: FnT2<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>): FnT2<E, A>;
export function funnel<A extends T2, B, C, D, E, F>(f1: FnT2<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>): FnT2<F, A>;
export function funnel<A extends T2, B, C, D, E, F, G>(f1: FnT2<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>): FnT2<G, A>;
export function funnel<A extends T2, B, C, D, E, F, G, H>(f1: FnT2<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>, f7: Fn<H, G>): FnT2<H, A>;
export function funnel<A extends T2, B, C, D, E, F, G, H, I>(f1: FnT2<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>, f7: Fn<H, G>, f8: Fn<I, H>): FnT2<I, A>;

export function funnel<A extends T3, B>(f1: FnT3<B, A>): FnT3<B, A>;
export function funnel<A extends T3, B, C>(f1: FnT3<B, A>, f2: Fn<C, B>): FnT3<C, A>;
export function funnel<A extends T3, B, C, D>(f1: FnT3<B, A>, f2: Fn<C, B>, f3: Fn<D, C>): FnT3<D, A>;
export function funnel<A extends T3, B, C, D, E>(f1: FnT3<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>): FnT3<E, A>;
export function funnel<A extends T3, B, C, D, E, F>(f1: FnT3<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>): FnT3<F, A>;
export function funnel<A extends T3, B, C, D, E, F, G>(f1: FnT3<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>): FnT3<G, A>;
export function funnel<A extends T3, B, C, D, E, F, G, H>(f1: FnT3<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>, f7: Fn<H, G>): FnT3<H, A>;
export function funnel<A extends T3, B, C, D, E, F, G, H, I>(f1: FnT3<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>, f7: Fn<H, G>, f8: Fn<I, H>): FnT3<I, A>;

export function funnel<A extends T4, B>(f1: FnT4<B, A>): FnT4<B, A>;
export function funnel<A extends T4, B, C>(f1: FnT4<B, A>, f2: Fn<C, B>): FnT4<C, A>;
export function funnel<A extends T4, B, C, D>(f1: FnT4<B, A>, f2: Fn<C, B>, f3: Fn<D, C>): FnT4<D, A>;
export function funnel<A extends T4, B, C, D, E>(f1: FnT4<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>): FnT4<E, A>;
export function funnel<A extends T4, B, C, D, E, F>(f1: FnT4<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>): FnT4<F, A>;
export function funnel<A extends T4, B, C, D, E, F, G>(f1: FnT4<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>): FnT4<G, A>;
export function funnel<A extends T4, B, C, D, E, F, G, H>(f1: FnT4<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>, f7: Fn<H, G>): FnT4<H, A>;
export function funnel<A extends T4, B, C, D, E, F, G, H, I>(f1: FnT4<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>, f7: Fn<H, G>, f8: Fn<I, H>): FnT4<I, A>;

export function funnel<A extends T5, B>(f1: FnT5<B, A>): FnT5<B, A>;
export function funnel<A extends T5, B, C>(f1: FnT5<B, A>, f2: Fn<C, B>): FnT5<C, A>;
export function funnel<A extends T5, B, C, D>(f1: FnT5<B, A>, f2: Fn<C, B>, f3: Fn<D, C>): FnT5<D, A>;
export function funnel<A extends T5, B, C, D, E>(f1: FnT5<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>): FnT5<E, A>;
export function funnel<A extends T5, B, C, D, E, F>(f1: FnT5<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>): FnT5<F, A>;
export function funnel<A extends T5, B, C, D, E, F, G>(f1: FnT5<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>): FnT5<G, A>;
export function funnel<A extends T5, B, C, D, E, F, G, H>(f1: FnT5<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>, f7: Fn<H, G>): FnT5<H, A>;
export function funnel<A extends T5, B, C, D, E, F, G, H, I>(f1: FnT5<B, A>, f2: Fn<C, B>, f3: Fn<D, C>, f4: Fn<E, D>, f5: Fn<F, E>, f6: Fn<G, F>, f7: Fn<H, G>, f8: Fn<I, H>): FnT5<I, A>;

/**
 * Works just like `pipe`, but allows an n-ary function to be passed as the first argument.
 */
export function funnel(first: (...args: any[]) => any, ...rest: ((arg: any) => any)[]): Fn<any> {
	return gather(pipe(spread(first), ...rest));
}
