import type {Fn, Fn2, Fn3, Fn4, Fn5, FnN} from '../types/utils';
import {MultiMap} from '../utils/MultiMap';

interface MemoizedFnBase {
	clear(): void;
}

export interface MemoizedFn<R, A> extends MemoizedFnBase {
	(a: A): R;
}

export interface MemoizedFn2<R, A, B> extends MemoizedFnBase {
	(a: A, b: B): R;
}

export interface MemoizedFn3<R, A, B, C> extends MemoizedFnBase {
	(a: A, b: B, c: C): R;
}

export interface MemoizedFn4<R, A, B, C, D> extends MemoizedFnBase {
	(a: A, b: B, c: C, d: D): R;
}

export interface MemoizedFn5<R, A, B, C, D, E> extends MemoizedFnBase {
	(a: A, b: B, c: C, d: D, e: E): R;
}

export interface MemoizedFnN<R, P extends readonly any[]> extends MemoizedFnBase {
	(...args: P): R;
}

export function memoize<R, A>(fn: Fn<R, A>): MemoizedFn<R, A>;
export function memoize<R, A, B>(fn: Fn2<R, A, B>): MemoizedFn2<R, A, B>;
export function memoize<R, A, B, C>(fn: Fn3<R, A, B, C>): MemoizedFn3<R, A, B, C>;
export function memoize<R, A, B, C, D>(fn: Fn4<R, A, B, C, D>): MemoizedFn4<R, A, B, C, D>;
export function memoize<R, A, B, C, D, E>(fn: Fn5<R, A, B, C, D, E>): MemoizedFn5<R, A, B, C, D, E>;
export function memoize<R, P extends readonly any[]>(fn: FnN<R, P>): MemoizedFnN<R, P>;
export function memoize<R, P extends readonly any[]>(fn: FnN<R, P>): MemoizedFnN<R, P> {
	const cache = new MultiMap<P, R>();

	const result = ((...args) => {
		if (cache.has(args)) {
			return cache.get(args)!;
		}

		const result = fn(...args);
		cache.set(args, result);
		return result;
	}) as MemoizedFnN<R, P>;

	result.clear = () => cache.clear();

	return result;
}
