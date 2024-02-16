import {expect, test} from 'bun:test';
import {startsWith} from '../../src';

test('startsWith', () => {
	expect(startsWith('')('')).toBe(true);
	expect(startsWith('')('a')).toBe(true);
	expect(startsWith('a')('')).toBe(false);
	expect(startsWith('a')('a')).toBe(true);
	expect(startsWith('a')('abc')).toBe(true);
	expect(startsWith('b')('abc')).toBe(false);
	expect(startsWith(/\d/)('123abc')).toBe(true);
});
