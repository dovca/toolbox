import type {Equals, Expect, Unshift} from '../../../src';

type _T1 = Expect<Equals<Unshift<[], 1>, [1]>>;
type _T2 = Expect<Equals<Unshift<[1], 2>, [2, 1]>>;
type _T3 = Expect<Equals<Unshift<[1, 2], 0>, [0, 1, 2]>>;
type _T4 = Expect<Equals<Unshift<number[], 0>, number[]>>;
type _T5 = Expect<Equals<Unshift<number[], string>, (string | number)[]>>;
