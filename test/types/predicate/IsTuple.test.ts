import type {Equals, Expect, IsTuple} from '../../../src';

type _Tests = [
	Expect<Equals<IsTuple<[]>, true>>,
	Expect<Equals<IsTuple<[number, string]>, true>>,
	Expect<Equals<IsTuple<number[]>, false>>,
];
