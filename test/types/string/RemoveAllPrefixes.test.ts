import type {Equals, Expect, RemoveAllPrefixes} from '../../../src';

type _Tests = [
	Expect<Equals<RemoveAllPrefixes<'aaba', 'a'>, 'ba'>>,
	Expect<Equals<RemoveAllPrefixes<'aaba', 'b'>, 'aaba'>>,
	Expect<Equals<RemoveAllPrefixes<'aaba', 'c'>, 'aaba'>>,
];
