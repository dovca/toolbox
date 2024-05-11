import type {Equals, Expect, Concat} from '../../../src';

type _T1 = Expect<Equals<Concat<[], []>, []>>;
type _T2 = Expect<Equals<Concat<[], [1]>, [1]>>;
type _T3 = Expect<Equals<Concat<[1], []>, [1]>>;
type _T4 = Expect<Equals<Concat<[1], [2]>, [1, 2]>>;
type _T5 = Expect<Equals<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>;
type _T6 = Expect<Equals<Concat<number[], [1]>, [...number[], 1]>>;
type _T7 = Expect<Equals<Concat<[1], number[]>, [1, ...number[]]>>;
