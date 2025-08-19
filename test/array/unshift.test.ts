import {expect, test} from 'bun:test';
import {unshift, unshiftInto} from '../../src';

test('unshift', () => {
	expect(unshift(1)([])).toEqual([1]);
	expect(unshift(0)([1])).toEqual([0, 1]);
	expect(unshift(3)([1, 2])).toEqual([3, 1, 2]);
});

test('unshiftInto', () => {
	expect(unshiftInto([])(1, 2)).toEqual([1, 2]);
	expect(unshiftInto([3, 4])(1, 2)).toEqual([1, 2, 3, 4]);
});
