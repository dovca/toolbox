import type {Equals, Expect, Nth} from '../../../src';

type _T1 = Expect<Equals<Nth<[number], 0>, number>>;
type _T2 = Expect<Equals<Nth<[string, number], 0>, string>>;
type _T3 = Expect<Equals<Nth<[string, number], 1>, number>>;
