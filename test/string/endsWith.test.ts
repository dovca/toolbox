import {expect, test} from 'bun:test';
import {endsWith} from '../../src';

test('endsWith', () => {
	expect(endsWith('')('')).toBe(true);
	expect(endsWith('')('a')).toBe(true);
	expect(endsWith('a')('')).toBe(false);
	expect(endsWith('a')('a')).toBe(true);
	expect(endsWith('def')('abcdef')).toBe(true);
	expect(endsWith('def')('abcde')).toBe(false);
});
