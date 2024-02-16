import {expect, test} from 'bun:test';
import {isNullish} from '../../src';

test('isNullish', () => {
	expect(isNullish(null)).toBe(true);
	expect(isNullish(undefined)).toBe(true);
	expect(isNullish('')).toBe(false);
	expect(isNullish('a')).toBe(false);
	expect(isNullish(0)).toBe(false);
	expect(isNullish(1)).toBe(false);
	expect(isNullish(false)).toBe(false);
	expect(isNullish(true)).toBe(false);
	expect(isNullish({})).toBe(false);
	expect(isNullish([])).toBe(false);
	expect(isNullish(new Date())).toBe(false);
	expect(isNullish(/a/)).toBe(false);
	expect(isNullish(() => {})).toBe(false);
});
