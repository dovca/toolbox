import {expect, test} from 'bun:test';
import {reverse} from '../../src';

test('reverse', () => {
	expect(reverse([])).toEqual([]);
	expect(reverse([1])).toEqual([1]);
	expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
});
