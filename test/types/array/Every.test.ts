import type {Equals, Every, Expect} from '../../../src';

type _Tests = [
	Expect<Equals<Every<[]>, true>>,
	Expect<Equals<Every<[true]>, true>>,
	Expect<Equals<Every<[true, true]>, true>>,
	Expect<Equals<Every<[true, false]>, false>>,
	Expect<Equals<Every<number[]>, boolean>>,
	Expect<Equals<Every<boolean[]>, boolean>>,
];
