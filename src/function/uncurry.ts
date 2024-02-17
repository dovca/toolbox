import type {Fn} from '../types';
import {wrap} from './wrap';

interface FnC0<R> {
	(): Fn<R, void>;
}

interface FnC1<R, A> {
	(): Fn<R, A>;
	(a: A): Fn<R, void>;
}

interface FnC2<R, A, B> {
	(): Fn<Fn<R, B>, A>;
	(a: A): Fn<R, B>;
	(a: A, b: B): Fn<R, void>;
}

interface FnC3<R, A, B, C> {
	(): Fn<Fn<Fn<R, C>, B>, A>;
	(a: A): Fn<Fn<R, C>, B>;
	(a: A, b: B): Fn<R, C>;
	(a: A, b: B, c: C): Fn<R, void>;
}

interface FnC4<R, A, B, C, D> {
	(): Fn<Fn<Fn<Fn<R, D>, C>, B>, A>;
	(a: A): Fn<Fn<Fn<R, D>, C>, B>;
	(a: A, b: B): Fn<Fn<R, D>, C>;
	(a: A, b: B, c: C): Fn<R, D>;
	(a: A, b: B, c: C, d: D): Fn<R, void>;
}

interface FnC5<R, A, B, C, D, E> {
	(): Fn<Fn<Fn<Fn<Fn<R, E>, D>, C>, B>, A>;
	(a: A): Fn<Fn<Fn<Fn<R, E>, D>, C>, B>;
	(a: A, b: B): Fn<Fn<Fn<R, E>, D>, C>;
	(a: A, b: B, c: C): Fn<Fn<R, E>, D>;
	(a: A, b: B, c: C, d: D): Fn<R, E>;
	(a: A, b: B, c: C, d: D, e: E): Fn<R, void>;
}

export function uncurry<R>(fn: Fn<R, void>): FnC0<R>;
export function uncurry<R, A, B, C, D, E>(fn: Fn<Fn<Fn<Fn<Fn<R, E>, D>, C>, B>, A>): FnC5<R, A, B, C, D, E>;
export function uncurry<R, A, B, C, D>(fn: Fn<Fn<Fn<Fn<R, D>, C>, B>, A>): FnC4<R, A, B, C, D>;
export function uncurry<R, A, B, C>(fn: Fn<Fn<Fn<R, C>, B>, A>): FnC3<R, A, B, C>;
export function uncurry<R, A, B>(fn: Fn<Fn<R, B>, A>): FnC2<R, A, B>
export function uncurry<R, A>(fn: Fn<R, A>): FnC1<R, A>;
export function uncurry(fn: Fn<any>): (...args: any[]) => any;
export function uncurry(fn: Fn<any>): (...args: any[]) => any {
	return (...args) => args.length
		? wrap(args.reduce((f, arg) => f(arg), fn))
		: fn;
}
