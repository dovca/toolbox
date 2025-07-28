import type {Equals, Expect, RemoveAllSuffixes} from '../../../src';

type _Tests = [
	Expect<Equals<RemoveAllSuffixes<'abaa', 'a'>, 'ab'>>,
	Expect<Equals<RemoveAllSuffixes<'abaa', 'b'>, 'abaa'>>,
	Expect<Equals<RemoveAllSuffixes<'abaa', 'c'>, 'abaa'>>,
];
