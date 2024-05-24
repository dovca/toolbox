import type {Equals, Expect, Pop} from '../../../src';

type _Tests = [
	Expect<Equals<Pop<[]>, []>>,
	Expect<Equals<Pop<[1]>, []>>,
	Expect<Equals<Pop<[1, 2]>, [1]>>,
	Expect<Equals<Pop<[1, 2, 3], 2>, [1]>>,
	Expect<Equals<Pop<[1, 2, 3], 0>, [1, 2, 3]>>,
	Expect<Equals<Pop<[1, 2, 3], 4>, []>>,
	Expect<Equals<Pop<number[]>, number[]>>,
];
