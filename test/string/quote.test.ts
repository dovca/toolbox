import {expect, test} from 'bun:test';
import {quote} from '../../src';

test('quote', () => {
	expect(quote('')).toBe('""');
	expect(quote('hello')).toBe('"hello"');
});
