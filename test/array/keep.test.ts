import {expect, test} from 'bun:test';
import {keep} from '../../src';

test('keep', () => {
	expect(keep()([])).toEqual([]);
	expect(keep(1)([])).toEqual([]);
	expect(keep<number>()([1])).toEqual([]);
	expect(keep(1, 2, 3)([4, 5, 6])).toEqual([]);
	expect(keep(1, 2, 3)([3, 4, 5])).toEqual([3]);
	expect(keep(1, 2, 3)([3, 2, 1])).toEqual([3, 2, 1]);
});
