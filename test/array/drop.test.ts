import {expect, test} from 'bun:test';
import {
	dropRightUntil,
	dropRightWhile,
	dropUntil,
	dropUntilReversed,
	dropWhile,
	dropWhileReversed
} from '../../src';

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const smallerFive = (value: number) => value < 5;
const greaterFive = (value: number) => value > 5

test('dropWhile', () => {
	expect(dropWhile(smallerFive)([])).toEqual([]);
	expect(dropWhile(smallerFive)([0])).toEqual([]);
	expect(dropWhile(smallerFive)([10])).toEqual([10]);
	expect(dropWhile(smallerFive)(values)).toEqual([5, 6, 7, 8, 9, 10]);
});

test('dropRightWhile', () => {
	expect(dropRightWhile(greaterFive)([])).toEqual([]);
	expect(dropRightWhile(greaterFive)([0])).toEqual([0]);
	expect(dropRightWhile(greaterFive)([10])).toEqual([]);
	expect(dropRightWhile(greaterFive)(values)).toEqual([0, 1, 2, 3, 4, 5]);
});

test('dropWhileReversed', () => {
	expect(dropWhileReversed(greaterFive)([])).toEqual([]);
	expect(dropWhileReversed(greaterFive)([0])).toEqual([0]);
	expect(dropWhileReversed(greaterFive)([10])).toEqual([]);
	expect(dropWhileReversed(greaterFive)(values)).toEqual([0, 1, 2, 3, 4, 5]);
});

test('dropUntil', () => {
	expect(dropUntil(greaterFive)([])).toEqual([]);
	expect(dropUntil(greaterFive)([])).toEqual([]);
	expect(dropUntil(greaterFive)([10])).toEqual([10]);
	expect(dropUntil(greaterFive)(values)).toEqual([6, 7, 8, 9, 10]);
});

test('dropRightUntil', () => {
	expect(dropRightUntil(smallerFive)([])).toEqual([]);
	expect(dropRightUntil(smallerFive)([0])).toEqual([0]);
	expect(dropRightUntil(smallerFive)([10])).toEqual([]);
	expect(dropRightUntil(smallerFive)(values)).toEqual([0, 1, 2, 3, 4]);
});

test('dropUntilReversed', () => {
	expect(dropUntilReversed(smallerFive)([])).toEqual([]);
	expect(dropUntilReversed(smallerFive)([0])).toEqual([0]);
	expect(dropUntilReversed(smallerFive)([10])).toEqual([]);
	expect(dropUntilReversed(smallerFive)(values)).toEqual([0, 1, 2, 3, 4]);
});
