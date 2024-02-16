import {expect, test} from 'bun:test';
import {isArray} from '../../src';

test('isArray', () => {
	expect(isArray([])).toBe(true);
	expect(isArray([0, 1, 2])).toBe(true);
	expect(isArray({})).toBe(false);
	expect(isArray(0)).toBe(false);
	expect(isArray('')).toBe(false);
	expect(isArray(null)).toBe(false);
	expect(isArray(undefined)).toBe(false);
});
