import {expect, test} from 'bun:test';
import {isObject} from '../../src';

test('isObject', () => {
	expect(isObject(null)).toBe(false);
	expect(isObject(undefined)).toBe(false);
	expect(isObject('')).toBe(false);
	expect(isObject('a')).toBe(false);
	expect(isObject(0)).toBe(false);
	expect(isObject(1)).toBe(false);
	expect(isObject(false)).toBe(false);
	expect(isObject(true)).toBe(false);
	expect(isObject({})).toBe(true);
	expect(isObject([])).toBe(false);
	expect(isObject(new Date())).toBe(true);
	expect(isObject(/a/)).toBe(true);
	expect(isObject(() => {})).toBe(false);
});
