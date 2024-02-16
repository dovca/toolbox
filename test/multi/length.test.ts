import {expect, test} from 'bun:test';
import {length} from '../../src';

test('length', () => {
	expect(length([])).toBe(0);
	expect(length([0, 0, 0])).toBe(3);
	expect(length([undefined, undefined, undefined])).toBe(3);
	expect(length('')).toBe(0);
	expect(length('abc')).toBe(3);
});
