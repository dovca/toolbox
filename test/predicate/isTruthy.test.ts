import {expect, test} from 'bun:test';
import {isTruthy} from '../../src';

test('isTruthy', () => {
	expect(isTruthy(0)).toBe(false);
	expect(isTruthy(1)).toBe(true);
	expect(isTruthy('')).toBe(false);
	expect(isTruthy('a')).toBe(true);
	expect(isTruthy(false)).toBe(false);
	expect(isTruthy(true)).toBe(true);
	expect(isTruthy(null)).toBe(false);
	expect(isTruthy(undefined)).toBe(false);
	expect(isTruthy([])).toBe(true);
	expect(isTruthy({})).toBe(true);
});
