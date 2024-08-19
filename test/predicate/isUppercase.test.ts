import {expect, test} from 'bun:test';
import {isUppercase} from '../../src';

test('isUppercase', () => {
	expect(isUppercase('')).toBe(true);
	expect(isUppercase('a')).toBe(false);
	expect(isUppercase('A')).toBe(true);
	expect(isUppercase('1')).toBe(true);
	expect(isUppercase('ABC')).toBe(true);
	expect(isUppercase('Abc')).toBe(false);
});
