import {expect, test} from 'bun:test';
import {toString} from '../../src';

test('toString', () => {
	expect(toString(0)).toBe('0');
	expect(toString(1)).toBe('1');
	expect(toString('')).toBe('');
	expect(toString('abc')).toBe('abc');
});
