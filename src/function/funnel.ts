import type {Fn, FnChain, FnT1, FnT2, FnT3, FnT4, FnT5, T1, T2, T3, T4, T5} from '../types/utils';
import {gather} from './gather';
import {pipe} from './pipe';
import {spread} from './spread';


/**
 * Works just like `pipe`, but allows an n-ary function to be passed as the first argument.
 */
export function funnel<A extends T1, B>(f1: FnT1<B, A>): FnT1<B, A>;
export function funnel<A extends T1, B, C>(f1: FnT1<B, A>, ...fns: FnChain<[B, C]>): FnT1<C, A>;
export function funnel<A extends T1, B, C, D>(f1: FnT1<B, A>, ...fns: FnChain<[B, C, D]>): FnT1<D, A>;
export function funnel<A extends T1, B, C, D, E>(f1: FnT1<B, A>, ...fns: FnChain<[B, C, D, E]>): FnT1<E, A>;
export function funnel<A extends T1, B, C, D, E, F>(f1: FnT1<B, A>, ...fns: FnChain<[B, C, D, E, F]>): FnT1<F, A>;
export function funnel<A extends T1, B, C, D, E, F, G>(f1: FnT1<B, A>, ...fns: FnChain<[B, C, D, E, F, G]>): FnT1<G, A>;
export function funnel<A extends T1, B, C, D, E, F, G, H>(f1: FnT1<B, A>, ...fns: FnChain<[B, C, D, E, F, G, H]>): FnT1<H, A>;
export function funnel<A extends T1, B, C, D, E, F, G, H, I>(f1: FnT1<B, A>, ...fns: FnChain<[B, C, D, E, F, G, H, I]>): FnT1<I, A>;

export function funnel<A extends T2, B>(f1: FnT2<B, A>): FnT2<B, A>;
export function funnel<A extends T2, B, C>(f1: FnT2<B, A>, ...fns: FnChain<[B, C]>): FnT2<C, A>;
export function funnel<A extends T2, B, C, D>(f1: FnT2<B, A>, ...fns: FnChain<[B, C, D]>): FnT2<D, A>;
export function funnel<A extends T2, B, C, D, E>(f1: FnT2<B, A>, ...fns: FnChain<[B, C, D, E]>): FnT2<E, A>;
export function funnel<A extends T2, B, C, D, E, F>(f1: FnT2<B, A>, ...fns: FnChain<[B, C, D, E, F]>): FnT2<F, A>;
export function funnel<A extends T2, B, C, D, E, F, G>(f1: FnT2<B, A>, ...fns: FnChain<[B, C, D, E, F, G]>): FnT2<G, A>;
export function funnel<A extends T2, B, C, D, E, F, G, H>(f1: FnT2<B, A>, ...fns: FnChain<[B, C, D, E, F, G, H]>): FnT2<H, A>;
export function funnel<A extends T2, B, C, D, E, F, G, H, I>(f1: FnT2<B, A>, ...fns: FnChain<[B, C, D, E, F, G, H, I]>): FnT2<I, A>;

export function funnel<A extends T3, B>(f1: FnT3<B, A>): FnT3<B, A>;
export function funnel<A extends T3, B, C>(f1: FnT3<B, A>, ...fns: FnChain<[B, C]>): FnT3<C, A>;
export function funnel<A extends T3, B, C, D>(f1: FnT3<B, A>, ...fns: FnChain<[B, C, D]>): FnT3<D, A>;
export function funnel<A extends T3, B, C, D, E>(f1: FnT3<B, A>, ...fns: FnChain<[B, C, D, E]>): FnT3<E, A>;
export function funnel<A extends T3, B, C, D, E, F>(f1: FnT3<B, A>, ...fns: FnChain<[B, C, D, E, F]>): FnT3<F, A>;
export function funnel<A extends T3, B, C, D, E, F, G>(f1: FnT3<B, A>, ...fns: FnChain<[B, C, D, E, F, G]>): FnT3<G, A>;
export function funnel<A extends T3, B, C, D, E, F, G, H>(f1: FnT3<B, A>, ...fns: FnChain<[B, C, D, E, F, G, H]>): FnT3<H, A>;
export function funnel<A extends T3, B, C, D, E, F, G, H, I>(f1: FnT3<B, A>, ...fns: FnChain<[B, C, D, E, F, G, H, I]>): FnT3<I, A>;

export function funnel<A extends T4, B>(f1: FnT4<B, A>): FnT4<B, A>;
export function funnel<A extends T4, B, C>(f1: FnT4<B, A>, ...fns: FnChain<[B, C]>): FnT4<C, A>;
export function funnel<A extends T4, B, C, D>(f1: FnT4<B, A>, ...fns: FnChain<[B, C, D]>): FnT4<D, A>;
export function funnel<A extends T4, B, C, D, E>(f1: FnT4<B, A>, ...fns: FnChain<[B, C, D, E]>): FnT4<E, A>;
export function funnel<A extends T4, B, C, D, E, F>(f1: FnT4<B, A>, ...fns: FnChain<[B, C, D, E, F]>): FnT4<F, A>;
export function funnel<A extends T4, B, C, D, E, F, G>(f1: FnT4<B, A>, ...fns: FnChain<[B, C, D, E, F, G]>): FnT4<G, A>;
export function funnel<A extends T4, B, C, D, E, F, G, H>(f1: FnT4<B, A>, ...fns: FnChain<[B, C, D, E, F, G, H]>): FnT4<H, A>;
export function funnel<A extends T4, B, C, D, E, F, G, H, I>(f1: FnT4<B, A>, ...fns: FnChain<[B, C, D, E, F, G, H, I]>): FnT4<I, A>;

export function funnel<A extends T5, B>(f1: FnT5<B, A>): FnT5<B, A>;
export function funnel<A extends T5, B, C>(f1: FnT5<B, A>, ...fns: FnChain<[B, C]>): FnT5<C, A>;
export function funnel<A extends T5, B, C, D>(f1: FnT5<B, A>, ...fns: FnChain<[B, C, D]>): FnT5<D, A>;
export function funnel<A extends T5, B, C, D, E>(f1: FnT5<B, A>, ...fns: FnChain<[B, C, D, E]>): FnT5<E, A>;
export function funnel<A extends T5, B, C, D, E, F>(f1: FnT5<B, A>, ...fns: FnChain<[B, C, D, E, F]>): FnT5<F, A>;
export function funnel<A extends T5, B, C, D, E, F, G>(f1: FnT5<B, A>, ...fns: FnChain<[B, C, D, E, F, G]>): FnT5<G, A>;
export function funnel<A extends T5, B, C, D, E, F, G, H>(f1: FnT5<B, A>, ...fns: FnChain<[B, C, D, E, F, G, H]>): FnT5<H, A>;
export function funnel<A extends T5, B, C, D, E, F, G, H, I>(f1: FnT5<B, A>, ...fns: FnChain<[B, C, D, E, F, G, H, I]>): FnT5<I, A>;

export function funnel(first: (...args: any[]) => any, ...rest: ((arg: any) => any)[]): Fn<any> {
	return gather(pipe(spread(first), ...rest));
}
