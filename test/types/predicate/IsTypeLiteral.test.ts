import type {Equals, Expect, IsTypeLiteral} from '../../../src';

type _Tests = [
	Expect<Equals<IsTypeLiteral<null>, true>>,
	Expect<Equals<IsTypeLiteral<undefined>, true>>,
	Expect<Equals<IsTypeLiteral<true>, true>>,
	Expect<Equals<IsTypeLiteral<false>, true>>,
	Expect<Equals<IsTypeLiteral<1>, true>>,
	Expect<Equals<IsTypeLiteral<'foo'>, true>>,
	Expect<Equals<IsTypeLiteral<boolean>, false>>,
	Expect<Equals<IsTypeLiteral<number>, false>>,
	Expect<Equals<IsTypeLiteral<string>, false>>,
	Expect<Equals<IsTypeLiteral<object>, false>>,
];
