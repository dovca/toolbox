import {expect, test} from 'bun:test';
import {isPositive, remove} from '../../src';

test('remove', () => {
	const removePositive = remove(isPositive);

	expect(removePositive([])).toEqual([]);
	expect(removePositive([1, 2, 3])).toEqual([]);
	expect(removePositive([-1, 0, 1])).toEqual([-1, 0]);
	expect(removePositive([-1, -2, -3])).toEqual([-1, -2, -3]);
});
