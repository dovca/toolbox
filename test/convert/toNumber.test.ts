import {expect, test} from 'bun:test';
import {toNumber} from '../../src';

test('test', () => {
	expect(toNumber(1)).toBe(1);
	expect(toNumber('1')).toBe(1);
	expect(toNumber(false)).toBe(0);
	expect(toNumber(true)).toBe(1);
	expect(toNumber(null)).toBe(0);
	expect(toNumber(undefined)).toBe(NaN);
	expect(toNumber('')).toBe(0);
	expect(toNumber([])).toBe(0);
	expect(toNumber([[[3]]])).toBe(3);
});
