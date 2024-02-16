import {expect, test} from 'bun:test';
import {or} from '../../src';

test('or', () => {
	expect(or(true)(true)).toBe(true);
	expect(or(true)(false)).toBe(true);
	expect(or(false)(true)).toBe(true);
	expect(or(false)(false)).toBe(false);
});
