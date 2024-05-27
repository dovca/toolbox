import {expect, test} from 'bun:test';
import {not} from '../../src';

test('not', () => {
	expect(not(true)).toBe(false);
	expect(not(false)).toBe(true);
	expect(not(0)).toBe(true);
	expect(not(1)).toBe(false);
	expect(not('')).toBe(true);
	expect(not('a')).toBe(false);
	expect(not(null)).toBe(true);
	expect(not(undefined)).toBe(true);
	expect(not({})).toBe(false);
	expect(not([])).toBe(false);
	expect(not(() => {})).toBe(false);
	expect(not(Symbol())).toBe(false);
	expect(not(BigInt(0))).toBe(true);
	expect(not(NaN)).toBe(true);
	expect(not(Infinity)).toBe(false);
	expect(not(-Infinity)).toBe(false);
});
