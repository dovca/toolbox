import {expect, test} from 'bun:test';
import {zip, zipObject, zipWith} from '../../src';

test('zip', () => {
	expect(zip([])([])).toEqual([]);
	expect(zip([1, 2, 3])([])).toEqual([[undefined, 1], [undefined, 2], [undefined, 3]]);
	expect(zip<number, undefined>([])([1, 2, 3])).toEqual([[1, undefined], [2, undefined], [3, undefined]]);
	expect(zip([1, 2, 3])(['a', 'b', 'c'])).toEqual([['a', 1], ['b', 2], ['c', 3]]);
});

test('zipWith', () => {
	const sum = (a?: number, b?: number) => (a ?? 0) + (b ?? 0);
	const zipWithSum = zipWith(sum);

	expect(zipWithSum([])([])).toEqual([]);
	expect(zipWithSum([1, 2, 3])([])).toEqual([1, 2, 3]);
	expect(zipWithSum([])([1, 2, 3])).toEqual([1, 2, 3]);
	expect(zipWithSum([1, 2, 3])([1, 2, 3])).toEqual([2, 4, 6]);
});

test('zipObject', () => {
	expect(zipObject([], [])).toEqual({});
	expect(zipObject(['a'], [])).toEqual({a: undefined});
	expect(zipObject(['a'], [2])).toEqual({a: 2});
	expect(zipObject(['a', 'b'], [2])).toEqual({a: 2, b: undefined});
	expect(zipObject(['a', 'b'], [2, 3])).toEqual({a: 2, b: 3});
})
