import type {Equals, Expect, Quote} from '../../../src';

type _Tests = [
	Expect<Equals<Quote<'foo'>, '"foo"'>>,
	Expect<Equals<Quote<42>, '"42"'>>,
	Expect<Equals<Quote<string>, `"${string}"`>>,
];
