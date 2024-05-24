import type {Equals, Expect, Push} from '../../../src';

type _Tests = [
	Expect<Equals<Push<[], 1>, [1]>>,
	Expect<Equals<Push<[1], 2>, [1, 2]>>,
	Expect<Equals<Push<[1, 2], boolean>, [1, 2, boolean]>>,
	Expect<Equals<Push<number[], number>, number[]>>,
	Expect<Equals<Push<number[], false>, (number | false)[]>>,
];
