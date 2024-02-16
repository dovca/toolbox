import {expect, test} from 'bun:test';
import {and} from '../../src';

test('and', () => {
	expect(and(true)(true)).toBe(true);
	expect(and(true)(false)).toBe(false);
	expect(and(false)(true)).toBe(false);
	expect(and(false)(false)).toBe(false);
});
