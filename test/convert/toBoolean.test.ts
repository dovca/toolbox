import {expect, test} from 'bun:test';
import {toBoolean} from '../../src';

test('toBoolean', () => {
	expect(toBoolean(true)).toBe(true);
	expect(toBoolean(null)).toBe(false);
	expect(toBoolean(undefined)).toBe(false);
	expect(toBoolean(0)).toBe(false);
	expect(toBoolean(1)).toBe(true);
	expect(toBoolean('')).toBe(false);
	expect(toBoolean('0')).toBe(true);
	expect(toBoolean('foo')).toBe(true);
	expect(toBoolean([])).toBe(true);
});
