import {expect, test} from 'bun:test';
import {difference} from '../../src';

test('difference', () => {
	expect(difference([])([])).toEqual([]);
	expect(difference([1])([])).toEqual([]);
	expect(difference<number>([])([1])).toEqual([1]);
	expect(difference([1])([1])).toEqual([]);
	expect(difference([1])([1, 2, 3])).toEqual([2, 3]);
});
