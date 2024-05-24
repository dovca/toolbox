import type {Equals, Expect, IsNegative} from '../../../src';

type _Tests = [
	Expect<Equals<IsNegative<number>, boolean>>,
	Expect<Equals<IsNegative<0>, false>>,
	Expect<Equals<IsNegative<1>, false>>,
	Expect<Equals<IsNegative<-1>, true>>,
];
