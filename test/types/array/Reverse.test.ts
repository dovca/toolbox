import type {Equals, Expect, Reverse} from '../../../src';

type _T1 = Expect<Equals<Reverse<[]>, []>>;
type _T2 = Expect<Equals<Reverse<[1]>, [1]>>;
type _T3 = Expect<Equals<Reverse<[1, 2]>, [2, 1]>>;
type _T4 = Expect<Equals<Reverse<[1, 2, 3]>, [3, 2, 1]>>;
