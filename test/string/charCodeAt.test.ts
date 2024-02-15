import {expect, test} from 'bun:test';
import {charCodeAt} from '../../src';

test('charCodeAt', () => {
	expect(charCodeAt(0)('')).toBe(NaN);
	expect(charCodeAt(0)('abc')).toBe(97);
	expect(charCodeAt(1)('abc')).toBe(98);
	expect(charCodeAt(2)('abc')).toBe(99);
	expect(charCodeAt(3)('abc')).toBe(NaN);
	expect(charCodeAt(-1)('abc')).toBe(99);
	expect(charCodeAt(-2)('abc')).toBe(98);
	expect(charCodeAt(-3)('abc')).toBe(97);
	expect(charCodeAt(-4)('abc')).toBe(NaN);
});
