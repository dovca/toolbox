import {expect, test} from 'bun:test';
import {isEven, partition} from '../../src';

test('partition', () => {
	const partitionByParity = partition(isEven);

	expect(partitionByParity([])).toEqual([[], []]);
	expect(partitionByParity([1])).toEqual([[], [1]]);
	expect(partitionByParity([2])).toEqual([[2], []]);
	expect(partitionByParity([1, 2])).toEqual([[2], [1]]);
	expect(partitionByParity([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([[2, 4, 6, 8], [1, 3, 5, 7, 9]]);
});
