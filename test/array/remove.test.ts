import {expect, test} from 'bun:test';
import {discard, remove} from '../../src';

test('remove', () => {
	const isPositive = (n: number) => n > 0;
	const removePositive = remove(isPositive);

	expect(removePositive([])).toEqual([]);
	expect(removePositive([1, 2, 3])).toEqual([]);
	expect(removePositive([-1, 0, 1])).toEqual([-1, 0]);
	expect(removePositive([-1, -2, -3])).toEqual([-1, -2, -3]);
});

test('reject', () => {
	expect(discard([])([])).toEqual([]);
	expect(discard(1)([2, 3, 4])).toEqual([2, 3, 4]);
	expect(discard(1, 2, 3)([1, 2, 3])).toEqual([]);
	expect(discard(1, 2, 3)([2, 3, 4])).toEqual([4]);
});
