import type {Equals, Expect, IsNullish} from '../../../src';

type _Tests = [
	Expect<Equals<IsNullish<undefined>, true>>,
	Expect<Equals<IsNullish<null>, true>>,
	Expect<Equals<IsNullish<null | undefined>, false>>,
	Expect<Equals<IsNullish<number>, false>>,
	Expect<Equals<IsNullish<string>, false>>,
	Expect<Equals<IsNullish<''>, false>>,
	Expect<Equals<IsNullish<[]>, false>>,
	Expect<Equals<IsNullish<[number]>, false>>,
	Expect<Equals<IsNullish<{ a: 1 }>, false>>,
];
