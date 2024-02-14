import {expect, test} from 'bun:test';
import {reject} from '../../src';

test('reject', () => {
	const isPositive = (n: number) => n > 0;
	const rejectPositive = reject(isPositive);

	expect(rejectPositive([])).toEqual([]);
	expect(rejectPositive([1, 2, 3])).toEqual([]);
	expect(rejectPositive([-1, 0, 1])).toEqual([-1, 0]);
	expect(rejectPositive([-1, -2, -3])).toEqual([-1, -2, -3]);
});
