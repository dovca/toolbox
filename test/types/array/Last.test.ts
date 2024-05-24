import type {Equals, Expect, Last} from '../../../src';

type _Tests = [
	Expect<Equals<Last<[]>, never>>,
	Expect<Equals<Last<[1]>, 1>>,
	Expect<Equals<Last<[1, 2]>, 2>>,
];
