import type {Discard, Equals, Expect} from '../../../src';

type _T1 = Expect<Equals<Discard<[], never>, []>>;
type _T2 = Expect<Equals<Discard<[1, 2, 3], never>, [1, 2, 3]>>;
type _T3 = Expect<Equals<Discard<[1, 2, 3], 1>, [2, 3]>>;
type _T4 = Expect<Equals<Discard<[string, 1, true], number>, [string, true]>>;
type _T5 = Expect<Equals<Discard<[1, 2, 3, 4], number>, []>>;
type _T6 = Expect<Equals<Discard<number[], number>, []>>;
type _T7 = Expect<Equals<Discard<number[], 1>, number[]>>;
type _T8 = Expect<Equals<Discard<(number | string)[], number>, string[]>>;
