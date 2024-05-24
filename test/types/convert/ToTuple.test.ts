import type {Equals, Expect, ToTuple} from '../../../src';

type _Tests = [
	Expect<Equals<ToTuple<[]>, []>>,
	Expect<Equals<ToTuple<number>, [number]>>,
	Expect<Equals<ToTuple<[number]>, [number]>>,
	Expect<Equals<ToTuple<number[]>, [number]>>,
	Expect<Equals<ToTuple<[number, string]>, [number, string]>>,
	Expect<Equals<ToTuple<(number | string)[]>, [number | string]>>,
];
