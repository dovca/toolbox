import {expect, test} from 'bun:test';
import {constant, grow, growWhile, increment, isLessThan, repeat} from '../../src';

test('grow', () => {
	expect(grow()([])).toEqual([]);
	expect(grow()([1])).toEqual([1, 1]);
	expect(grow()([1, 2, 3])).toEqual([1, 2, 3, 3]);
	expect(repeat(3, grow(increment))([1])).toEqual([1, 2, 3, 4]);
	expect(grow(() => 10)([1, 2, 3])).toEqual([1, 2, 3, 10]);
	expect(grow((x: number) => x + 1)([1, 2, 3])).toEqual([1, 2, 3, 4]);
});

test('growWhile', () => {
	expect(growWhile(constant(false))([])).toEqual([]);
	expect(growWhile(constant(false))([1, 2])).toEqual([1, 2]);
	expect(growWhile(isLessThan(3), increment)([1])).toEqual([1, 2, 3]);
});
