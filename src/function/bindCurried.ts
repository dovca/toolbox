import type {AnyFunction, Fn} from '../types';
import {wrap} from './wrap';

interface FnBC0<R> {
	(): Fn<R, void>;
}

interface FnBC1<R, A> {
	(): Fn<R, A>;
	(a: A): Fn<R, void>;
}

interface FnBC2<R, A, B> {
	(): Fn<Fn<R, B>, A>;
	(a: A): Fn<R, B>;
	(a: A, b: B): Fn<R, void>;
}

interface FnBC3<R, A, B, C> {
	(): Fn<Fn<Fn<R, C>, B>, A>;
	(a: A): Fn<Fn<R, C>, B>;
	(a: A, b: B): Fn<R, C>;
	(a: A, b: B, c: C): Fn<R, void>;
}

interface FnBC4<R, A, B, C, D> {
	(): Fn<Fn<Fn<Fn<R, D>, C>, B>, A>;
	(a: A): Fn<Fn<Fn<R, D>, C>, B>;
	(a: A, b: B): Fn<Fn<R, D>, C>;
	(a: A, b: B, c: C): Fn<R, D>;
	(a: A, b: B, c: C, d: D): Fn<R, void>;
}

interface FnBC5<R, A, B, C, D, E> {
	(): Fn<Fn<Fn<Fn<Fn<R, E>, D>, C>, B>, A>;
	(a: A): Fn<Fn<Fn<Fn<R, E>, D>, C>, B>;
	(a: A, b: B): Fn<Fn<Fn<R, E>, D>, C>;
	(a: A, b: B, c: C): Fn<Fn<R, E>, D>;
	(a: A, b: B, c: C, d: D): Fn<R, E>;
	(a: A, b: B, c: C, d: D, e: E): Fn<R, void>;
}

/**
 * Binds the flowing values as arguments to the given curried function
 * @param fn The curried function to bind the values to
 */
export function bindCurried<R>(fn: Fn<R, void>): FnBC0<R>;
export function bindCurried<R, A, B, C, D, E>(fn: Fn<Fn<Fn<Fn<Fn<R, E>, D>, C>, B>, A>): FnBC5<R, A, B, C, D, E>;
export function bindCurried<R, A, B, C, D>(fn: Fn<Fn<Fn<Fn<R, D>, C>, B>, A>): FnBC4<R, A, B, C, D>;
export function bindCurried<R, A, B, C>(fn: Fn<Fn<Fn<R, C>, B>, A>): FnBC3<R, A, B, C>;
export function bindCurried<R, A, B>(fn: Fn<Fn<R, B>, A>): FnBC2<R, A, B>
export function bindCurried<R, A>(fn: Fn<R, A>): FnBC1<R, A>;
export function bindCurried(fn: Fn<any>): (...args: any[]) => any;
export function bindCurried(fn: Fn<any>): (...args: any[]) => any {
	return (...args) => args.length
		? wrap(args.reduce((f, arg) => (f as AnyFunction)(arg), fn))
		: fn;
}
