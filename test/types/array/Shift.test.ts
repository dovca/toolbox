import type {Equals, Expect, Shift} from '../../../src';

type _T1 = Expect<Equals<Shift<[]>, []>>;
type _T2 = Expect<Equals<Shift<[1]>, []>>;
type _T3 = Expect<Equals<Shift<[1, 2]>, [2]>>;
type _T4 = Expect<Equals<Shift<[1, 2, 3], 2>, [3]>>;
type _T5 = Expect<Equals<Shift<[1, 2, 3], 0>, [1, 2, 3]>>;
type _T6 = Expect<Equals<Shift<number[]>, number[]>>;
