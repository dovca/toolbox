import type {Fn, Fn2, Fn3, Fn4, Fn5} from '../types';

interface FnB0<R> {
	(): Fn<R, void>;
}

interface FnB1<R, A> {
	(): Fn<R, A>;
	(a: A): Fn<R, void>;
}

interface FnB2<R, A, B> {
	(): Fn2<R, A, B>;
	(a: A): Fn<R, B>;
	(a: A, b: B): Fn<R, void>;
}

interface FnB3<R, A, B, C> {
	(): Fn3<R, A, B, C>;
	(a: A): Fn2<R, B, C>;
	(a: A, b: B): Fn<R, C>;
	(a: A, b: B, c: C): Fn<R, void>;
}

interface FnB4<R, A, B, C, D> {
	(): Fn4<R, B, C, D, A>;
	(a: A): Fn3<R, B, C, D>;
	(a: A, b: B): Fn2<R, C, D>;
	(a: A, b: B, c: C): Fn<R, D>;
	(a: A, b: B, c: C, d: D): Fn<R, void>;
}

interface FnB5<R, A, B, C, D, E> {
	(): Fn5<R, A, B, C, D, E>;
	(a: A): Fn4<R, B, C, D, E>;
	(a: A, b: B): Fn3<R, C, D, E>;
	(a: A, b: B, c: C): Fn2<R, D, E>;
	(a: A, b: B, c: C, d: D): Fn<R, E>;
	(a: A, b: B, c: C, d: D, e: E): Fn<R, void>;
}

export function bind<R>(fn: Fn<R, void>): FnB0<R>;
export function bind<R, A>(fn: Fn<R, A>): FnB1<R, A>;
export function bind<R, A, B>(fn: Fn2<R, A, B>): FnB2<R, A, B>;
export function bind<R, A, B, C>(fn: Fn3<R, A, B, C>): FnB3<R, A, B, C>;
export function bind<R, A, B, C, D>(fn: Fn4<R, A, B, C, D>): FnB4<R, A, B, C, D>;
export function bind<R, A, B, C, D, E>(fn: Fn5<R, A, B, C, D, E>): FnB5<R, A, B, C, D, E>;
export function bind(fn: (...args: any[]) => any): (...args: any[]) => Fn<any> {
	return (...args) => fn.bind(null, ...args);
}
