import type {Equals, Expect, TupleOf} from '../../../src';

type _Tests = [
	Expect<Equals<TupleOf<number, 0>, []>>,
	Expect<Equals<TupleOf<number, 1>, [number]>>,
	Expect<Equals<TupleOf<number, 2>, [number, number]>>,
	Expect<Equals<TupleOf<number | string, 2>, [number | string, number | string]>>,
	Expect<Equals<TupleOf<number, number>, number[]>>,
	Expect<Equals<TupleOf<number, -1>, never>>,
];
