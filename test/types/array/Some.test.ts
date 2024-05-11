import type {Equals, Expect, Some} from '../../../src';

type _T1 = Expect<Equals<Some<[]>, false>>;
type _T2 = Expect<Equals<Some<[true]>, true>>;
type _T3 = Expect<Equals<Some<[true, false]>, true>>;
type _T4 = Expect<Equals<Some<[false, false]>, false>>;
type _T5 = Expect<Equals<Some<number[]>, boolean>>;
type _T6 = Expect<Equals<Some<boolean[]>, boolean>>;
