import type {Equals, Expect, FromEntries} from '../../../src';

type _Tests = [
	Expect<Equals<FromEntries<['a', number]>, {a: number}>>,
	Expect<Equals<FromEntries<['a', number] | ['b', string]>, {a: number; b: string}>>,
];
