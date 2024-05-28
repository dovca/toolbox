import {expect, test} from 'bun:test';
import {
	isGreaterThan,
	isLessThan,
	takeRightUntil,
	takeRightWhile,
	takeUntil,
	takeUntilReversed,
	takeWhile,
	takeWhileReversed
} from '../../src';

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const smallerFive = isLessThan(5);
const greaterFive = isGreaterThan(5);

test('takeWhile', () => {
	expect(takeWhile(smallerFive)([])).toEqual([]);
	expect(takeWhile(smallerFive)([0])).toEqual([0]);
	expect(takeWhile(smallerFive)([10])).toEqual([]);
	expect(takeWhile(smallerFive)(values)).toEqual([0, 1, 2, 3, 4]);
});

test('takeRightWhile', () => {
	expect(takeRightWhile(greaterFive)([])).toEqual([]);
	expect(takeRightWhile(greaterFive)([0])).toEqual([]);
	expect(takeRightWhile(greaterFive)([10])).toEqual([10]);
	expect(takeRightWhile(greaterFive)(values)).toEqual([6, 7, 8, 9, 10]);
});

test('takeWhileReversed', () => {
	expect(takeWhileReversed(greaterFive)([])).toEqual([]);
	expect(takeWhileReversed(greaterFive)([0])).toEqual([]);
	expect(takeWhileReversed(greaterFive)([10])).toEqual([10]);
	expect(takeWhileReversed(greaterFive)(values)).toEqual([10, 9, 8, 7, 6]);
});

test('takeUntil', () => {
	expect(takeUntil(greaterFive)([])).toEqual([]);
	expect(takeUntil(greaterFive)([0])).toEqual([0]);
	expect(takeUntil(greaterFive)([10])).toEqual([]);
	expect(takeUntil(greaterFive)(values)).toEqual([0, 1, 2, 3, 4, 5]);
});

test('takeRightUntil', () => {
	expect(takeRightUntil(smallerFive)([])).toEqual([]);
	expect(takeRightUntil(smallerFive)([0])).toEqual([]);
	expect(takeRightUntil(smallerFive)([10])).toEqual([10]);
	expect(takeRightUntil(smallerFive)(values)).toEqual([5, 6, 7, 8, 9, 10]);
});

test('takeUntilReversed', () => {
	expect(takeUntilReversed(smallerFive)([])).toEqual([]);
	expect(takeUntilReversed(smallerFive)([0])).toEqual([]);
	expect(takeUntilReversed(smallerFive)([10])).toEqual([10]);
	expect(takeUntilReversed(smallerFive)(values)).toEqual([10, 9, 8, 7, 6, 5]);
});
