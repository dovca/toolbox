import type {Equals, Expect, First} from '../../../src';

type _Tests = [
	Expect<Equals<First<[]>, never>>,
	Expect<Equals<First<[1]>, 1>>,
	Expect<Equals<First<[2, 1]>, 2>>,
];
