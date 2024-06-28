import type {Fn, Fn2, Fn3, Fn4, Fn5, FnN} from '../types/utils';
import {MultiMap} from '../utils/MultiMap';

type MemoizedFnBase = {
	clear(): void;
};

export type MemoizedFn<R, A> = {
	(a: A): R;
} & MemoizedFnBase;

export type MemoizedFn2<R, A, B> = {
	(a: A, b: B): R;
} & MemoizedFnBase;

export type MemoizedFn3<R, A, B, C> = {
	(a: A, b: B, c: C): R;
} & MemoizedFnBase;

export type MemoizedFn4<R, A, B, C, D> = {
	(a: A, b: B, c: C, d: D): R;
} & MemoizedFnBase;

export type MemoizedFn5<R, A, B, C, D, E> = {
	(a: A, b: B, c: C, d: D, e: E): R;
} & MemoizedFnBase;

export type MemoizedFnN<R, P extends readonly any[]> = {
	(...args: P): R;
} & MemoizedFnBase;

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
