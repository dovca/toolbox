import type {Equals, Expect, Filter} from '../../../src';

type _Tests = [
	Expect<Equals<Filter<[], number>, []>>,
	Expect<Equals<Filter<[1, 2, 3], number>, [1, 2, 3]>>,
	Expect<Equals<Filter<[number, string, 3], number>, [number, 3]>>,
	Expect<Equals<Filter<[number, string, boolean], never>, []>>,
	Expect<Equals<Filter<[1, 'foo', false], number | string>, [1, 'foo']>>,
	Expect<Equals<Filter<number[], 1>, 1[]>>,
	Expect<Equals<Filter<number[], number>, number[]>>,
	Expect<Equals<Filter<(number | string)[], number>, number[]>>,
	Expect<Equals<Filter<[number, number | string], string>, [] | [string]>>,
];
