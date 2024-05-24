import type {Equals, Expect, ToArray} from '../../../src';

type _Tests = [
	Expect<Equals<ToArray<[]>, never[]>>,
	Expect<Equals<ToArray<number>, number[]>>,
	Expect<Equals<ToArray<[number]>, number[]>>,
	Expect<Equals<ToArray<number[]>, number[]>>,
	Expect<Equals<ToArray<[number, string]>, (number | string)[]>>,
	Expect<Equals<ToArray<(number | string)[]>, (number | string)[]>>,
];
