import type {Equals, Expect, ToNumber} from '../../../src';

type _Tests = [
	Expect<Equals<ToNumber<number>, number>>,
	Expect<Equals<ToNumber<1>, 1>>,
	Expect<Equals<ToNumber<true>, 1>>,
	Expect<Equals<ToNumber<false | null | '' | [] | 0>, 0>>,
	Expect<Equals<ToNumber<'1'>, 1>>,
	Expect<Equals<ToNumber<'a'>, number>>,
	Expect<Equals<ToNumber<[[[1]]]>, 1>>,
	Expect<Equals<ToNumber<[1, 2]>, number>>,
	Expect<Equals<ToNumber<object>, number>>,
	Expect<Equals<ToNumber<{valueOf(): 1}>, 1>>,
	Expect<Equals<ToNumber<{a: 1}>, number>>,
	Expect<Equals<ToNumber<undefined>, number>>,
];
