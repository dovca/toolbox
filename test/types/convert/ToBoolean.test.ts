import type {Equals, Expect, ToBoolean} from '../../../src';

type _Tests = [
	Expect<Equals<ToBoolean<boolean>, boolean>>,
	Expect<Equals<ToBoolean<true>, true>>,
	Expect<Equals<ToBoolean<false | null | undefined | '' | 0>, false>>,
	Expect<Equals<ToBoolean<1>, boolean>>,
	Expect<Equals<ToBoolean<'1'>, true>>,
	Expect<Equals<ToBoolean<'a'>, true>>,
	Expect<Equals<ToBoolean<[[[1]]]>, true>>,
	Expect<Equals<ToBoolean<[1, 2]>, true>>,
	Expect<Equals<ToBoolean<object>, true>>,
	Expect<Equals<ToBoolean<{ valueOf(): 1 }>, true>>,
	Expect<Equals<ToBoolean<{ a: 1 }>, true>>,
];
