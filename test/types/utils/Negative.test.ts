import type {Equals, Expect, Negative} from '../../../src';

type _Tests = [
	Expect<Equals<Negative<0>, 0>>,
	Expect<Equals<Negative<1>, -1>>,
	Expect<Equals<Negative<-1>, 1>>,
	Expect<Equals<Negative<number>, number>>,
];
