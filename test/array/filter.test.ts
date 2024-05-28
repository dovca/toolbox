import {expect, test} from 'bun:test';
import {filter, isPositive, isString, operatorGreaterThan, sameValueZero} from '../../src';

test('filter', () => {
	expect(filter(isPositive)([])).toEqual([]);
	expect(filter(isPositive)([0])).toEqual([]);
	expect(filter(isPositive)([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
	expect(filter(isPositive)([4, 3, 2, 1, 0])).toEqual([4, 3, 2, 1]);
	expect(filter(operatorGreaterThan)([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
	expect(filter(operatorGreaterThan)([1, 2, 3, 2, 7])).toEqual([1, 2, 3, 7]);
	expect(filter(sameValueZero)([0, 1, 2, 3])).toEqual([0, 1, 2, 3]);
	expect(filter(sameValueZero)([1, 2, 3])).toEqual([]);
	expect(filter(isString)([1, false, 'foo', 0, 'bar', null])).toEqual(['foo', 'bar']);
});
