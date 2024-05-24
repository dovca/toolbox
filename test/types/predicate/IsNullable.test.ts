import type {Equals, Expect, IsNullable} from '../../../src';

type _Tests = [
	Expect<Equals<IsNullable<null>, true>>,
	Expect<Equals<IsNullable<undefined>, true>>,
	Expect<Equals<IsNullable<string | null>, true>>,
	Expect<Equals<IsNullable<string | undefined>, true>>,
	Expect<Equals<IsNullable<''>, false>>,
	Expect<Equals<IsNullable<[]>, false>>,
	Expect<Equals<IsNullable<object>, false>>,
	Expect<Equals<IsNullable<number>, false>>,
	Expect<Equals<IsNullable<string>, false>>,
	Expect<Equals<IsNullable<never>, false>>,
];
