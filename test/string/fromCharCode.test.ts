import {expect, test} from 'bun:test';
import {fromCharCode} from '../../src';

test('fromCharCode', () => {
	expect(fromCharCode(97)).toBe('a');
	expect(fromCharCode(98)).toBe('b');
	expect(fromCharCode(99)).toBe('c');
});
