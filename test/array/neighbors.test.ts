import {expect, test} from 'bun:test';
import {neighbors} from '../../src';

test('neighbors', () => {
	expect(neighbors([])).toEqual([]);
	expect(neighbors([1])).toEqual([]);
	expect(neighbors([1, 2])).toEqual([[1, 2]]);
	expect(neighbors([1, 2, 3])).toEqual([[1, 2], [2, 3]]);
});
