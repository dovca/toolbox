import {expect, test} from 'bun:test';
import {isPositive, some} from '../../src';

test('test', () => {
	expect(some(isPositive)([])).toBe(false);
	expect(some(isPositive)([0])).toBe(false);
	expect(some(isPositive)([0, 0, 0, 1])).toBe(true);
	expect(some(isPositive)([1, 2, 3])).toBe(true);
});
