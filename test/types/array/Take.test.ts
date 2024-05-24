import type {Equals, Expect, Take, TakeRight, TakeRightWhile, TakeWhile} from '../../../src';

type _Tests = [
	Expect<Equals<Take<[], 1>, []>>,
	Expect<Equals<Take<[1], 1>, [1]>>,
	Expect<Equals<Take<[1, 2, 3], 1>, [1]>>,
	Expect<Equals<Take<[1, 2, 3], 2>, [1, 2]>>,
	Expect<Equals<Take<[1, 2, 3], 0>, []>>,
	Expect<Equals<Take<[1, 2, 3], 4>, [1, 2, 3]>>,
	Expect<Equals<Take<number[], 1>, number[]>>,

	Expect<Equals<TakeRight<[], 1>, []>>,
	Expect<Equals<TakeRight<[1], 1>, [1]>>,
	Expect<Equals<TakeRight<[1, 2, 3], 1>, [3]>>,
	Expect<Equals<TakeRight<[1, 2, 3], 2>, [2, 3]>>,
	Expect<Equals<TakeRight<[1, 2, 3], 0>, []>>,
	Expect<Equals<TakeRight<[1, 2, 3], 4>, [1, 2, 3]>>,

	Expect<Equals<TakeWhile<[], number>, []>>,
	Expect<Equals<TakeWhile<[1], number>, [1]>>,
	Expect<Equals<TakeWhile<[1, 2], number>, [1, 2]>>,
	Expect<Equals<TakeWhile<[1, 'foo'], number>, [1]>>,
	Expect<Equals<TakeWhile<['foo', 2], number>, []>>,
	Expect<Equals<TakeWhile<[1, 'foo', 3], number>, [1]>>,

	Expect<Equals<TakeRightWhile<[], number>, []>>,
	Expect<Equals<TakeRightWhile<[1], number>, [1]>>,
	Expect<Equals<TakeRightWhile<[1, 2], number>, [1, 2]>>,
	Expect<Equals<TakeRightWhile<[1, 'foo'], number>, []>>,
	Expect<Equals<TakeRightWhile<['foo', 2], number>, [2]>>,
	Expect<Equals<TakeRightWhile<[1, 'foo', 3], number>, [3]>>,
];
