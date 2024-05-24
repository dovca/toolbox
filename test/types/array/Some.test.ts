import type {Equals, Expect, Some} from '../../../src';

type _Tests = [
	Expect<Equals<Some<[]>, false>>,
	Expect<Equals<Some<[true]>, true>>,
	Expect<Equals<Some<[true, false]>, true>>,
	Expect<Equals<Some<[false, true]>, true>>,
	Expect<Equals<Some<[false, false]>, false>>,
	Expect<Equals<Some<number[]>, boolean>>,
	Expect<Equals<Some<boolean[]>, boolean>>,
];
