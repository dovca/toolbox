import {expect, test} from 'bun:test';
import {forEach, forEachReversed} from '../../src/array';

test('forEach', () => {
	const values = [1, 2, 3];
	const result: number[] = [];

	const returned = forEach<number>((value) => result.push(value + 1))(values)

	expect(result).toEqual([2, 3, 4]);
	expect(returned).toBe(values);
});

test('forEachReversed', () => {
	const values = [1, 2, 3];
	const result: number[] = [];

	const returned = forEachReversed<number>((value) => result.push(value + 1))(values)

	expect(result).toEqual([4, 3, 2]);
	expect(returned).toBe(values);
});
