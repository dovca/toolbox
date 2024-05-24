import type {Equals, Expect, Shift} from '../../../src';

type _Tests = [
	Expect<Equals<Shift<[]>, []>>,
	Expect<Equals<Shift<[1]>, []>>,
	Expect<Equals<Shift<[1, 2]>, [2]>>,
	Expect<Equals<Shift<[1, 2, 3], 2>, [3]>>,
	Expect<Equals<Shift<[1, 2, 3], 0>, [1, 2, 3]>>,
	Expect<Equals<Shift<number[]>, number[]>>,
];
