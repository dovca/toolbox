import {expect, test} from 'bun:test';
import {xor} from '../../src';

test('test', () => {
	expect(xor(true)(true)).toBe(false);
	expect(xor(true)(false)).toBe(true);
	expect(xor(false)(true)).toBe(true);
	expect(xor(false)(false)).toBe(false);
});
