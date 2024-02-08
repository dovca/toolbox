import {expect, test} from 'bun:test';
import {unshift} from '../../src/array';

test('unshift', () => {
	expect(unshift(1)([])).toEqual([1]);
	expect(unshift(0)([1])).toEqual([0, 1]);
	expect(unshift(3)([1, 2])).toEqual([3, 1, 2]);
});
