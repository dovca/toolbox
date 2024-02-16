import {expect, test} from 'bun:test';
import {remove, removeWith} from '../../src';

test('remove', () => {
	expect(remove(0)([])).toEqual([]);
	expect(remove(0)([0, 1, 2, 1])).toEqual([1, 2, 1]);
	expect(remove(1)([0, 1, 2, 1])).toEqual([0, 2]);
});

test('removeWith', () => {
	const isPositive = (n: number) => n > 0;
	const removePositive = removeWith(isPositive);

	expect(removePositive([])).toEqual([]);
	expect(removePositive([1, 2, 3])).toEqual([]);
	expect(removePositive([-1, 0, 1])).toEqual([-1, 0]);
	expect(removePositive([-1, -2, -3])).toEqual([-1, -2, -3]);
});
