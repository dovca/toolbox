import {expect, test} from 'bun:test';
import {every} from '../../src/array';

const positive = (x: number) => x > 0;

test('every: check value', () => {
	expect(every(positive)([])).toBe(true);
	expect(every(positive)([0])).toBe(false);
	expect(every(positive)([1, 2, 3, 4, 5])).toBe(true);
	expect(every(positive)([4, 3, 2, 1, 0])).toBe(false);
});

test('every: check index', () => {
	expect(every<number>((x, i) => x > i)([1, 2, 3, 4])).toBe(true);
	expect(every<number>((x, i) => x > i)([1, 2, 3, 2])).toBe(false);
	expect(every<number>((x, i) => x === i)([0, 1, 2, 3])).toBe(true);
});
