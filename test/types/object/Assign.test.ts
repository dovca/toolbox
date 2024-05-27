import type {Equals, Expect, Assign} from '../../../src';

type _Tests = [
	// eslint-disable-next-line @typescript-eslint/ban-types
	Expect<Equals<Assign<{}, 'a', number>, { a: number }>>,
	// eslint-disable-next-line @typescript-eslint/ban-types
	Expect<Equals<Assign<{}, 'a.b.c', number>, { a: { b: { c: number } } }>>,
	// eslint-disable-next-line @typescript-eslint/ban-types
	Expect<Equals<Assign<{}, 'a.b.3.c.d', number>, { a: { b: { c : { d: number } }[] } }>>,
];
