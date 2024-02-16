import {expect, test} from 'bun:test';
import {search} from '../../src';

test('search', () => {
	expect(search('')('')).toBe(0);
	expect(search('')('a')).toBe(0);
	expect(search('a')('')).toBe(-1);
	expect(search('a')('a')).toBe(0);
	expect(search('c')('abc')).toBe(2);
	expect(search(/\d/)('abc1def')).toBe(3);
	expect(search('z')('abcdef')).toBe(-1);
});
