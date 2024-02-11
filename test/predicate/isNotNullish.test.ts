import {expect, test} from 'bun:test';
import {isNotNullish} from '../../src';

test('isNotNullish', () => {
	expect(isNotNullish(null)).toBe(false);
	expect(isNotNullish(undefined)).toBe(false);
	expect(isNotNullish(false)).toBe(true);
	expect(isNotNullish(true)).toBe(true);
	expect(isNotNullish(0)).toBe(true);
	expect(isNotNullish('')).toBe(true);
	expect(isNotNullish(1)).toBe(true);
	expect(isNotNullish('a')).toBe(true);
	expect(isNotNullish({})).toBe(true);
	expect(isNotNullish([])).toBe(true);
	expect(isNotNullish(() => {})).toBe(true);
	expect(isNotNullish(0n)).toBe(true);
});
