import {expect, test} from 'bun:test';
import {isNumber} from '../../src';

test('isNumber', () => {
	expect(isNumber(0)).toBe(true);
	expect(isNumber(1)).toBe(true);
	expect(isNumber(-1)).toBe(true);
	expect(isNumber(0.1)).toBe(true);
	expect(isNumber(-0.1)).toBe(true);
	expect(isNumber(Infinity)).toBe(true);
	expect(isNumber(-Infinity)).toBe(true);
	expect(isNumber(NaN)).toBe(true);
	expect(isNumber('')).toBe(false);
	expect(isNumber('a')).toBe(false);
	expect(isNumber(false)).toBe(false);
	expect(isNumber(true)).toBe(false);
	expect(isNumber({})).toBe(false);
	expect(isNumber([])).toBe(false);
	expect(isNumber(new Date())).toBe(false);
	expect(isNumber(/a/)).toBe(false);
	expect(isNumber(() => {})).toBe(false);
});
