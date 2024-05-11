import type {Equals, Expect, Push} from '../../../src';

type _T1 = Expect<Equals<Push<[], 1>, [1]>>;
type _T2 = Expect<Equals<Push<[1], 2>, [1, 2]>>;
type _T3 = Expect<Equals<Push<[1, 2], boolean>, [1, 2, boolean]>>;
type _T4 = Expect<Equals<Push<number[], number>, number[]>>;
type _T5 = Expect<Equals<Push<number[], false>, (number | false)[]>>;
