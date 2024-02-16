import {expect, test} from 'bun:test';
import {isFalsy} from '../../src';

test('isFalsy', () => {
	expect(isFalsy(0)).toBe(true);
	expect(isFalsy('')).toBe(true);
	expect(isFalsy(false)).toBe(true);
	expect(isFalsy(null)).toBe(true);
	expect(isFalsy(undefined)).toBe(true);
	expect(isFalsy(NaN)).toBe(true);
	expect(isFalsy(1)).toBe(false);
	expect(isFalsy('a')).toBe(false);
	expect(isFalsy(true)).toBe(false);
	expect(isFalsy({})).toBe(false);
	expect(isFalsy([])).toBe(false);
	expect(isFalsy(() => {})).toBe(false);
});
