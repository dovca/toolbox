import type {Equals, Expect, SetOptional} from '../../../src';

type Test = {
	a: number
	b: string
	c?: boolean
};

type _Tests = [
	Expect<Equals<SetOptional<Test, 'a'>, {a?: number; b: string; c?: boolean}>>,
	Expect<Equals<SetOptional<Test, 'a' | 'b'>, {a?: number; b?: string; c?: boolean}>>,
	Expect<Equals<SetOptional<Test, 'a' | 'b' | 'c'>, {a?: number; b?: string; c?: boolean}>>,
	Expect<Equals<SetOptional<Test, 'c'>, Test>>,
];
