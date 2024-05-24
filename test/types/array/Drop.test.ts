import type {DropRightWhile, DropWhile, Equals, Expect} from '../../../src';
type _Tests = [
	Expect<Equals<DropWhile<[], number>, []>>,
	Expect<Equals<DropWhile<[1], number>, []>>,
	Expect<Equals<DropWhile<[1, 2], number>, []>>,
	Expect<Equals<DropWhile<[1, 'foo'], number>, ['foo']>>,
	Expect<Equals<DropWhile<['foo', 2], number>, ['foo', 2]>>,
	Expect<Equals<DropWhile<[1, 'foo', 3], number>, ['foo', 3]>>,

	Expect<Equals<DropRightWhile<[], number>, []>>,
	Expect<Equals<DropRightWhile<[1], number>, []>>,
	Expect<Equals<DropRightWhile<[1, 2], number>, []>>,
	Expect<Equals<DropRightWhile<[1, 'foo'], number>, [1, 'foo']>>,
	Expect<Equals<DropRightWhile<['foo', 2], number>, ['foo']>>,
	Expect<Equals<DropRightWhile<[1, 'foo', 3], number>, [1, 'foo']>>,
];
