import type {Equals, Expect, Unshift} from '../../../src';

type _Tests = [
	Expect<Equals<Unshift<[], 1>, [1]>>,
	Expect<Equals<Unshift<[1], 2>, [2, 1]>>,
	Expect<Equals<Unshift<[1, 2], 0>, [0, 1, 2]>>,
	Expect<Equals<Unshift<number[], 0>, number[]>>,
	Expect<Equals<Unshift<number[], string>, (string | number)[]>>,
];
