import type {Equals, Expect, Access} from '../../../src';

type _Tests = [
	Expect<Equals<Access<{ a: { b: number } }, 'a'>, { b: number }>>,
	Expect<Equals<Access<{ a: { b: number } }, 'a.b'>, number>>,
	Expect<Equals<Access<{ a: { b: number } }, 'a.b.c'>, undefined>>,
	Expect<Equals<Access<{ a: { b: { c: string }[] } }, 'a.b.3.c'>, string>>,
	Expect<Equals<Access<{ a: number }, '.'>, { a: number }>>,
	Expect<Equals<Access<{ a: number }, ''>, { a: number }>>,
	Expect<Equals<Access<{ a: { b: number } }, 'a..b'>, number>>,
];
