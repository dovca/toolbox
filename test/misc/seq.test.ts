import {expect, test} from 'bun:test';
import {seq} from '../../src';

test('seq', () => {
	expect(seq(3)).toEqual([1, 2, 3]);

	expect(seq(1, 5)).toEqual([1, 2, 3, 4, 5]);
	expect(seq(1, 5, 1)).toEqual([1, 2, 3, 4, 5]);
	expect(seq(1, 5, 2)).toEqual([1, 3, 5]);
	expect(seq(1, 5, 3)).toEqual([1, 4]);
	expect(seq(1, 5, 4)).toEqual([1, 5]);
	expect(seq(1, 5, 5)).toEqual([1]);
	expect(seq(1, 5, 6)).toEqual([1]);

	expect(seq(5, 1)).toEqual([5, 4, 3, 2, 1]);
	expect(seq(5, 1, 1)).toEqual([5, 4, 3, 2, 1]);
	expect(seq(5, 1, 2)).toEqual([5, 3, 1]);
	expect(seq(5, 1, 3)).toEqual([5, 2]);
	expect(seq(5, 1, 4)).toEqual([5, 1]);
	expect(seq(5, 1, 5)).toEqual([5]);

	expect(seq(1, 1)).toEqual([1]);
	expect(seq(1, 1, 2)).toEqual([1]);

	expect(() => seq(1, 5, 0)).toThrow();
	expect(() => seq(1, 5, -1)).toThrow();
});
