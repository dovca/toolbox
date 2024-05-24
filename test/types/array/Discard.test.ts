import type {Discard, Equals, Expect} from '../../../src';

type _Tests = [
	Expect<Equals<Discard<[], never>, []>>,
	Expect<Equals<Discard<[1, 2, 3], never>, [1, 2, 3]>>,
	Expect<Equals<Discard<[1, 2, 3], 1>, [2, 3]>>,
	Expect<Equals<Discard<[string, 1, true], number>, [string, true]>>,
	Expect<Equals<Discard<[1, 2, 3, 4], number>, []>>,
	Expect<Equals<Discard<number[], number>, []>>,
	Expect<Equals<Discard<number[], 1>, number[]>>,
	Expect<Equals<Discard<(number | string)[], number>, string[]>>,
	Expect<Equals<Discard<[number, number | string], number>, [] | [string]>>,
];
