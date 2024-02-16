import {expect, test} from 'bun:test';
import {isValidIndex} from '../../src';

test('isValidIndex', () => {
	expect(isValidIndex(0)([])).toBe(false);
	expect(isValidIndex(0)([1, 2, 3])).toBe(true);
	expect(isValidIndex(2)([1, 2, 3])).toBe(true);
	expect(isValidIndex(3)([1, 2, 3])).toBe(false);
	expect(isValidIndex(-1)([1, 2, 3])).toBe(true);
	expect(isValidIndex(-3)([1, 2, 3])).toBe(true);
	expect(isValidIndex(-4)([1, 2, 3])).toBe(false);
	expect(isValidIndex(0)('')).toBe(false);
	expect(isValidIndex(0)('123')).toBe(true);
	expect(isValidIndex(2)('123')).toBe(true);
	expect(isValidIndex(3)('123')).toBe(false);
	expect(isValidIndex(-1)('123')).toBe(true);
	expect(isValidIndex(-3)('123')).toBe(true);
	expect(isValidIndex(-4)('123')).toBe(false);
});
