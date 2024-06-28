import type {Equals, Expect, Includes} from '../../../src';

type _Tests = [
	Expect<Equals<Includes<[], string>, false>>,
	Expect<Equals<Includes<[number, string], string>, true>>,
	Expect<Equals<Includes<[number, string], boolean>, false>>,
	Expect<Equals<Includes<[2, string], number>, true>>,
	Expect<Equals<Includes<[number, string], 2>, false>>,
];
