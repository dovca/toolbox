import {expect, test} from 'bun:test';
import {cut} from '../../src/array';

test('cut', () => {
	expect(cut(0)([])).toEqual([[], []]);
	expect(cut(10)([])).toEqual([[], []]);
	expect(cut<number>(0)([1, 2, 3, 4, 5])).toEqual([[], [1, 2, 3, 4, 5]]);
	expect(cut<number>(2)([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
	expect(cut<number>(5)([1, 2, 3, 4, 5])).toEqual([[1, 2, 3, 4, 5], []]);
	expect(cut<number>(10)([1, 2, 3, 4, 5])).toEqual([[1, 2, 3, 4, 5], []]);
	expect(cut<number>(-1)([1, 2, 3, 4, 5])).toEqual([[1, 2, 3, 4], [5]]);
	expect(cut<number>(-10)([1, 2, 3, 4, 5])).toEqual([[], [1, 2, 3, 4, 5]]);
});
