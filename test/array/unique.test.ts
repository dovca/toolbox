import {expect, test} from 'bun:test';
import {unique} from '../../src/array';

test('unique', () => {
	expect(unique([])).toEqual([]);
	expect(unique([1])).toEqual([1]);
	expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
	expect(unique([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
	expect(unique([1, 2, 3, 1, 2, 3])).toEqual([1, 2, 3]);
});
