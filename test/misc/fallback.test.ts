import {expect, test, jest} from 'bun:test';
import {fallback} from '../../src';

test('fallback: simple value', () => {
	const fb = {};

	expect(fallback(fb)(undefined)).toBe(fb);
	expect(fallback(fb)(null)).toBe(fb);
	expect(fallback(fb)(0)).toBe(0);
	expect(fallback(fb)(1)).toBe(1);
});

test('fallback: function', () => {
	const fb = jest.fn(() => 0);
	const fb2 = jest.fn(() => fb);

	expect(fallback(fb)(undefined)).toBe(0);
	expect(fallback(fb)(null)).toBe(0);
	expect(fallback(fb)(1)).toBe(1);
	expect(fb).toHaveBeenCalledTimes(2);

	// Don't fallback
	expect(fallback(fb2)(1)).toBe(1);
	expect(fb2).toHaveBeenCalledTimes(0);
	expect(fb).toHaveBeenCalledTimes(2);

	// Do fallback
	expect(fallback(fb2)(null)).toBe(fb);
	expect(fb2).toHaveBeenCalledTimes(1);
	expect(fb).toHaveBeenCalledTimes(2);
});
