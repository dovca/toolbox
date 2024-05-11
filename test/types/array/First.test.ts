import type {Equals, Expect, First} from '../../../src';

type _T1 = Expect<Equals<First<[]>, never>>;
type _T2 = Expect<Equals<First<[1]>, 1>>;
type _T3 = Expect<Equals<First<[2, 1]>, 2>>;
