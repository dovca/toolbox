import type {Equals, Expect, Join} from '../../../src';

type _T1 = Expect<Equals<Join<[]>, ''>>;
type _T2 = Expect<Equals<Join<[1]>, '1'>>;
type _T3 = Expect<Equals<Join<[1, 2, 3], ','>, '1,2,3'>>;
type _T4 = Expect<Equals<Join<[1, 'foo', 3], '|'>, '1|foo|3'>>;
type _T5 = Expect<Equals<Join<boolean[]>, string>>;
type _T6 = Expect<Equals<Join<[false, boolean]>, `false${boolean}`>>;
