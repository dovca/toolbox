import {expect, test} from 'bun:test';
import {isOneOf} from '../../src';

test('isOneOf', () => {
	expect(isOneOf(1, 2, 3)(0)).toBe(false);
	expect(isOneOf(1, 2, 3)(1)).toBe(true);
	expect(isOneOf(1, 2, 3)(2)).toBe(true);
	expect(isOneOf(1, 2, 3)(3)).toBe(true);
	expect(isOneOf(1, 2, 3)(4)).toBe(false);
	expect(isOneOf()(0)).toBe(false);
});
