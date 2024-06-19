import {expect, test} from 'bun:test';
import {unquote} from '../../src';

test('unquote', () => {
	expect(unquote('')).toBe('');
	expect(unquote('""')).toBe('');
	expect(unquote("''")).toBe('');
	expect(unquote("'")).toBe("'");
	expect(unquote('"')).toBe('"');
	expect(unquote('hello')).toBe('hello');
	expect(unquote('"hello"')).toBe('hello');
	expect(unquote('"hello')).toBe('"hello');
});
