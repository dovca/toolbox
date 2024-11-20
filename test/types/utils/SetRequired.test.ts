import type {Equals, Expect, SetRequired} from '../../../src';

type Test = {
	a?: number
	b?: string
	c: boolean
};

type _Tests = [
	Expect<Equals<SetRequired<Test, 'a'>, {a: number; b?: string; c: boolean}>>,
	Expect<Equals<SetRequired<Test, 'a' | 'b'>, {a: number; b: string; c: boolean}>>,
	Expect<Equals<SetRequired<Test, 'a' | 'b' | 'c'>, {a: number; b: string; c: boolean}>>,
	Expect<Equals<SetRequired<Test, 'c'>, Test>>,
];
