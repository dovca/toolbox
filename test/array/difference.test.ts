import {expect, test} from 'bun:test';
import {difference, differenceWith, equalizeWith, round} from '../../src';

test('difference', () => {
	expect(difference([])([])).toEqual([]);
	expect(difference([1])([])).toEqual([]);
	expect(difference<number>([])([1])).toEqual([1]);
	expect(difference([1])([1])).toEqual([]);
	expect(difference([1])([1, 2, 3])).toEqual([2, 3]);
	expect(difference([2, 3, 4])([1, 2, 3])).toEqual([1]);
});


test('differenceWith', () => {
	const diff = differenceWith(equalizeWith(round));

	expect(diff([])([])).toEqual([]);
	expect(diff([1])([])).toEqual([]);
	expect(diff([])([1])).toEqual([1]);
	expect(diff([1])([1])).toEqual([]);
	expect(diff([1])([1.1])).toEqual([]);
	expect(diff([1.1, 2.2, 4.4])([1, 2, 3])).toEqual([3]);
});
