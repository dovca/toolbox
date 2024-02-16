import {expect, test} from 'bun:test';
import {isString} from '../../src';

test('isString', () => {
	expect(isString(null)).toBe(false);
	expect(isString(undefined)).toBe(false);
	expect(isString('')).toBe(true);
	expect(isString('a')).toBe(true);
	expect(isString(0)).toBe(false);
	expect(isString(1)).toBe(false);
	expect(isString(false)).toBe(false);
	expect(isString(true)).toBe(false);
	expect(isString({})).toBe(false);
	expect(isString([])).toBe(false);
	expect(isString(new Date())).toBe(false);
	expect(isString(/a/)).toBe(false);
	expect(isString(() => {})).toBe(false);
});
