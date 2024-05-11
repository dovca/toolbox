import type {Equals, Every, Expect} from '../../../src';

type _T1 = Expect<Equals<Every<[]>, true>>;
type _T2 = Expect<Equals<Every<[true]>, true>>;
type _T3 = Expect<Equals<Every<[true, true]>, true>>;
type _T4 = Expect<Equals<Every<[true, false]>, false>>;
type _T5 = Expect<Equals<Every<number[]>, boolean>>;
type _T6 = Expect<Equals<Every<boolean[]>, boolean>>;
