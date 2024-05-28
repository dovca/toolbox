import {expect, test} from 'bun:test';
import {every, isPositive} from '../../src';

test('every: check value', () => {
	expect(every(isPositive)([])).toBe(true);
	expect(every(isPositive)([0])).toBe(false);
	expect(every(isPositive)([1, 2, 3, 4, 5])).toBe(true);
	expect(every(isPositive)([4, 3, 2, 1, 0])).toBe(false);
});
