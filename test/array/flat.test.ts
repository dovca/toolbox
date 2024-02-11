import {expect, test} from 'bun:test';
import {flat} from '../../src';

test('flat', () => {
	expect(flat()([])).toEqual([]);
	expect(flat<number[]>()([1])).toEqual([1]);
	expect(flat<number[][]>()([[1]])).toEqual([1]);
	expect(flat<number[][][]>()([[[1]]])).toEqual([[1]]);
	expect(flat<number[][][], 3>(3)([[[1]]])).toEqual([1]);
	expect(flat<number[][][], 10>(10)([[[1]]])).toEqual([1]);
	expect(flat(10)([[[[[1]]], [[2]]], 3])).toEqual([1, 2, 3]);
});
