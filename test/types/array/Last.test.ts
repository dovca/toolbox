import type {Equals, Expect, Last} from '../../../src';

type _T1 = Expect<Equals<Last<[]>, never>>;
type _T2 = Expect<Equals<Last<[1]>, 1>>;
type _T3 = Expect<Equals<Last<[1, 2]>, 2>>;
