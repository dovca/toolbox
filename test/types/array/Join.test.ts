import type {Equals, Expect, Join} from '../../../src';

type _Tests = [
	Expect<Equals<Join<[]>, ''>>,
	Expect<Equals<Join<[1]>, '1'>>,
	Expect<Equals<Join<[1, 2, 3], ','>, '1,2,3'>>,
	Expect<Equals<Join<[1, 'foo', 3], '|'>, '1|foo|3'>>,
	Expect<Equals<Join<boolean[]>, string>>,
	Expect<Equals<Join<[false, boolean]>, `false${string}`>>,
];
