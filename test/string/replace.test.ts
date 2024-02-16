import {expect, test} from 'bun:test';
import {replace} from '../../src';

test('replace', () => {
	expect(replace('')('')).toBe('');
	expect(replace('', '')('')).toBe('');
	expect(replace('a', 'b')('')).toBe('');
	expect(replace('a')('abc')).toBe('bc');
	expect(replace('a', 'b')('abc')).toBe('bbc');
	expect(replace('a', 'b')('abcabc')).toBe('bbcabc');
	expect(replace(/a/g, 'b')('abcabc')).toBe('bbcbbc');
});
