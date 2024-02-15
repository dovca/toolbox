import {expect, test} from 'bun:test';
import {charAt} from '../../src';

test('charAt', () => {
	expect(charAt(0)('')).toBe('');
	expect(charAt(0)('abc')).toBe('a');
	expect(charAt(1)('abc')).toBe('b');
	expect(charAt(2)('abc')).toBe('c');
	expect(charAt(3)('abc')).toBe('');
	expect(charAt(-1)('abc')).toBe('c');
	expect(charAt(-2)('abc')).toBe('b');
	expect(charAt(-3)('abc')).toBe('a');
	expect(charAt(-4)('abc')).toBe('');
});
