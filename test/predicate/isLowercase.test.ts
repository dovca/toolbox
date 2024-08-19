import {expect, test} from 'bun:test';
import {isLowercase} from '../../src';

test('isLowercase', () => {
	expect(isLowercase('')).toBe(true);
	expect(isLowercase('a')).toBe(true);
	expect(isLowercase('A')).toBe(false);
	expect(isLowercase('1')).toBe(true);
	expect(isLowercase('abc')).toBe(true);
	expect(isLowercase('Abc')).toBe(false);
});
