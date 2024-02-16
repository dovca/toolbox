import {expect, test} from 'bun:test';
import {substring} from '../../src';

test('substring', () => {
	expect(substring(1, 3)('hello')).toBe('el');
	expect(substring(0, 3)('hello')).toBe('hel');
	expect(substring(3)('hello')).toBe('lo');
	expect(substring(3, 0)('hello')).toBe('hel');
});
