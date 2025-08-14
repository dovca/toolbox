import {expect, test} from 'bun:test';
import {chunk, chunkBy, chunkWith, isLessThan, isOdd, length} from '../../src';

test('chunk', () => {
	expect(chunk(3)([])).toEqual([]);
	expect(chunk(3)([1])).toEqual([[1]]);
	expect(chunk(3)([1, 2])).toEqual([[1, 2]]);
	expect(chunk(3)([1, 2, 3])).toEqual([[1, 2, 3]]);
	expect(chunk(3)([1, 2, 3, 4])).toEqual([[1, 2, 3], [4]]);
	expect(chunk(3)([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
});

test('chunkWith', () => {
	expect(chunkWith()([1, 1, 1, 2, 3, 3])).toEqual([[1, 1, 1], [2], [3, 3]]);
	expect(chunkWith(isOdd)([])).toEqual([]);
	expect(chunkWith(isOdd)([1, 3, 5, 2, 4, 6, 7])).toEqual([[1, 3, 5], [2, 4, 6], [7]]);
	expect(chunkWith(isLessThan(3))([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
	expect(chunkWith(length)(['abc', 'foo', 'hello']))
});

test('chunkBy', () => {
	expect(chunkBy('a')([])).toEqual([]);
	expect(chunkBy('a')([{a: 1}])).toEqual([[{a: 1}]]);
	expect(chunkBy('a')([{a: 1}, {a: 1}])).toEqual([[{a: 1}, {a: 1}]]);
	expect(chunkBy('a')([{a: 1}, {a: 2}, {a: 2}, {a: 1}])).toEqual([[{a: 1}], [{a: 2}, {a: 2}], [{a: 1}]]);
});
