import type {Equals, Expect, Pop} from '../../../src';

type _T1 = Expect<Equals<Pop<[]>, []>>;
type _T2 = Expect<Equals<Pop<[1]>, []>>;
type _T3 = Expect<Equals<Pop<[1, 2]>, [1]>>;
type _T4 = Expect<Equals<Pop<[1, 2, 3], 2>, [1]>>;
type _T5 = Expect<Equals<Pop<[1, 2, 3], 0>, [1, 2, 3]>>;
type _T6 = Expect<Equals<Pop<number[]>, number[]>>;
