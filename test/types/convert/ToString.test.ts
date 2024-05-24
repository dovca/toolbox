import type {Equals, Expect, ToString} from '../../../src';

type _Tests = [
	Expect<Equals<ToString<boolean>, string>>,
	Expect<Equals<ToString<true>, 'true'>>,
	Expect<Equals<ToString<1>, '1'>>,
	Expect<Equals<ToString<'1'>, '1'>>,
	Expect<Equals<ToString<'a'>, 'a'>>,
	Expect<Equals<ToString<[[[1]]]>, '1'>>,
	Expect<Equals<ToString<[1, 2]>, '1,2'>>,
	Expect<Equals<ToString<object>, '[object Object]'>>,
	Expect<Equals<ToString<{ toString(): 1 }>, '1'>>,
	Expect<Equals<ToString<{ a: 1 }>, string>>,
];
