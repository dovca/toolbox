import {expect, test} from 'bun:test';
import {findLastIndex, findIndex, findIndexReversed, isPositive} from '../../src';

test('findIndex', () => {
	expect(findIndex(isPositive)([])).toBe(-1);
	expect(findIndex(isPositive)([0])).toBe(-1);
	expect(findIndex(isPositive)([1])).toBe(0);
	expect(findIndex(isPositive)([0, 0, 0, 1, 2, 0, 0])).toBe(3);
});

test('findLastIndex', () => {
	expect(findLastIndex(isPositive)([])).toBe(-1);
	expect(findLastIndex(isPositive)([0])).toBe(-1);
	expect(findLastIndex(isPositive)([1])).toBe(0);
	expect(findLastIndex(isPositive)([0, 0, 0, 1, 2, 0, 0])).toBe(4);
});

test('findIndexReversed', () => {
	expect(findIndexReversed(isPositive)([])).toBe(-1);
	expect(findIndexReversed(isPositive)([0])).toBe(-1);
	expect(findIndexReversed(isPositive)([1])).toBe(0);
	expect(findIndexReversed(isPositive)([0, 0, 0, 1, 2, 0, 0])).toBe(2);
});
