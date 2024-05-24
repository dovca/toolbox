import type {Equals, Expect, Nth} from '../../../src';

type _Tests = [
	Expect<Equals<Nth<[number], 0>, number>>,
	Expect<Equals<Nth<[string, number], 0>, string>>,
	Expect<Equals<Nth<[string, number], 1>, number>>,
];
