import type {Equals, Expect, Reverse} from '../../../src';

type _Tests = [
	Expect<Equals<Reverse<[]>, []>>,
	Expect<Equals<Reverse<[1]>, [1]>>,
	Expect<Equals<Reverse<[1, 2]>, [2, 1]>>,
	Expect<Equals<Reverse<[1, 2, 3]>, [3, 2, 1]>>,
];
