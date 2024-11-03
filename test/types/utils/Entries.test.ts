import type {Entries, Equals, Expect} from '../../../src';

type _Tests = [
	Expect<Equals<Entries<{a: number; b?: string}>, ['a', number] | ['b', string | undefined]>>,
	Expect<Equals<Entries<Record<string, number>>, [string, number]>>,
	Expect<Equals<Entries<object>, never>>,
];
