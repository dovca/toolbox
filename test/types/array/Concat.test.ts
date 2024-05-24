import type {Equals, Expect, Concat} from '../../../src';

type _Tests = [
	Expect<Equals<Concat<[], []>, []>>,
	Expect<Equals<Concat<[], [1]>, [1]>>,
	Expect<Equals<Concat<[1], []>, [1]>>,
	Expect<Equals<Concat<[1], [2]>, [1, 2]>>,
	Expect<Equals<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
	Expect<Equals<Concat<number[], [1]>, [...number[], 1]>>,
	Expect<Equals<Concat<[1], number[]>, [1, ...number[]]>>,
];
