import {expect, test} from 'bun:test';
import {at, type Maybe} from '../../src';

test('at: single index', () => {
	expect(at(0)([])).toBe(undefined);
	expect(at(0)([1])).toBe(1);
	expect<Maybe<number>>(at(1)([1])).toBe(undefined);
	expect(at(1)([1, 2])).toBe(2);
	expect(at(-1)([1, 2, 3])).toBe(3);
	expect<Maybe<number>>(at(-5)([1, 2, 3])).toBe(undefined);
});

test('at: multiple indices', () => {
	expect(at()([1, 2, 3])).toEqual([]);
	expect(at(0, 1)([])).toEqual([undefined, undefined]);
	expect(at(0, 1)([1])).toEqual([1, undefined]);
	expect(at(0, 1)([1, 2])).toEqual([1, 2]);
	expect(at(1, -1)([1, 2, 3])).toEqual([2, 3]);
	expect(at(2, 1, 0)([1, 2, 3])).toEqual([3, 2, 1]);
});
