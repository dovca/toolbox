import type {Equals, Expect, IsEmpty} from '../../../src';

type _Tests = [
	Expect<Equals<IsEmpty<null>, true>>,
	Expect<Equals<IsEmpty<undefined>, true>>,
	Expect<Equals<IsEmpty<''>, true>>,
	Expect<Equals<IsEmpty<[]>, true>>,
	// eslint-disable-next-line @typescript-eslint/ban-types
	Expect<Equals<IsEmpty<{}>, true>>,
	Expect<Equals<IsEmpty<[number]>, false>>,
	Expect<Equals<IsEmpty<{ a: 1 }>, false>>,
	Expect<Equals<IsEmpty<number[]>, boolean>>,
	Expect<Equals<IsEmpty<string>, boolean>>,
	Expect<Equals<IsEmpty<object>, boolean>>,
];
