import type {Equals, Expect, CollapseAllRepeats} from '../../../src';

type _Tests = [
	Expect<Equals<CollapseAllRepeats<'aabaaabb', 'a'>, 'ababb'>>,
	Expect<Equals<CollapseAllRepeats<'aabaaabb', 'b'>, 'aabaaab'>>,
	Expect<Equals<CollapseAllRepeats<'aabaaabb', 'c'>, 'aabaaabb'>>,
];
