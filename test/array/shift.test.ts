import {expect, test} from 'bun:test';
import {shift} from '../../src';

test('shift', () => {
	expect(shift([])).toEqual([]);
	expect(shift([1])).toEqual([]);
	expect(shift([1, 2, 3])).toEqual([2, 3]);
});
