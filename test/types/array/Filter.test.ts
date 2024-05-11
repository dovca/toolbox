import type {Equals, Expect, Filter} from '../../../src';

type _T1 = Expect<Equals<Filter<[], number>, []>>;
type _T2 = Expect<Equals<Filter<[1, 2, 3], number>, [1, 2, 3]>>;
type _T3 = Expect<Equals<Filter<[number, string, 3], number>, [number, 3]>>;
type _T4 = Expect<Equals<Filter<[number, string, boolean], never>, []>>;
type _T5 = Expect<Equals<Filter<[1, 'foo', false], number | string>, [1, 'foo']>>;
type _T6 = Expect<Equals<Filter<number[], 1>, 1[]>>;
type _T7 = Expect<Equals<Filter<number[], number>, number[]>>;
type _T8 = Expect<Equals<Filter<(number | string)[], number>, number[]>>;
