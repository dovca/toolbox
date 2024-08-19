import type {Equals, Expect, Fn, FnChain} from '../../../src';

type _Tests = [
	Expect<Equals<FnChain<[number, string, boolean]>, [Fn<string, number>, Fn<boolean, string>]>>,
];
