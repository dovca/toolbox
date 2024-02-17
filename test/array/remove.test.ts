import {expect, test} from 'bun:test';
import {removeAll, removeWith} from '../../src';

test('removeWith', () => {
	const isPositive = (n: number) => n > 0;
	const removePositive = removeWith(isPositive);

	expect(removePositive([])).toEqual([]);
	expect(removePositive([1, 2, 3])).toEqual([]);
	expect(removePositive([-1, 0, 1])).toEqual([-1, 0]);
	expect(removePositive([-1, -2, -3])).toEqual([-1, -2, -3]);
});

test('removeAll', () => {
	expect(removeAll([])([])).toEqual([]);
	expect(removeAll(1)([2, 3, 4])).toEqual([2, 3, 4]);
	expect(removeAll(1, 2, 3)([1, 2, 3])).toEqual([]);
	expect(removeAll(1, 2, 3)([2, 3, 4])).toEqual([4]);
});
