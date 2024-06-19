import type {Equals, Expect, Unquote} from '../../../src';

type _Tests = [
	Expect<Equals<Unquote<'foo'>, 'foo'>>,
	Expect<Equals<Unquote<'"foo"'>, 'foo'>>,
	Expect<Equals<Unquote<'"foo'>, '"foo'>>,
	Expect<Equals<Unquote<'foo"'>, 'foo"'>>,
	Expect<Equals<Unquote<string>, string>>,
];
