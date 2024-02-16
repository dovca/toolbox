import {expect, test} from 'bun:test';
import {findLastIndex, findIndex, findIndexReversed} from '../../src';

const positive = (x: number) => x > 0;

test('findIndex', () => {
	expect(findIndex(positive)([])).toBe(-1);
	expect(findIndex(positive)([0])).toBe(-1);
	expect(findIndex(positive)([1])).toBe(0);
	expect(findIndex(positive)([0, 0, 0, 1, 2, 0, 0])).toBe(3);
});

test('findLastIndex', () => {
	expect(findLastIndex(positive)([])).toBe(-1);
	expect(findLastIndex(positive)([0])).toBe(-1);
	expect(findLastIndex(positive)([1])).toBe(0);
	expect(findLastIndex(positive)([0, 0, 0, 1, 2, 0, 0])).toBe(4);
});

test('findIndexReversed', () => {
	expect(findIndexReversed(positive)([])).toBe(-1);
	expect(findIndexReversed(positive)([0])).toBe(-1);
	expect(findIndexReversed(positive)([1])).toBe(0);
	expect(findIndexReversed(positive)([0, 0, 0, 1, 2, 0, 0])).toBe(2);
});
