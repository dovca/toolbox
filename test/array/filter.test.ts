import {expect, test} from 'bun:test';
import {filter} from '../../src';

const positive = (x: number) => x > 0;

test('filter', () => {
	expect(filter(positive)([])).toEqual([]);
	expect(filter(positive)([0])).toEqual([]);
	expect(filter(positive)([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
	expect(filter(positive)([4, 3, 2, 1, 0])).toEqual([4, 3, 2, 1]);
	expect(filter<number>((x, i) => x > i)([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
	expect(filter<number>((x, i) => x > i)([1, 2, 3, 2, 7])).toEqual([1, 2, 3, 7]);
	expect(filter<number>((x, i) => x === i)([0, 1, 2, 3])).toEqual([0, 1, 2, 3]);
	expect(filter<number>((x, i) => x === i)([1, 2, 3])).toEqual([]);
});
