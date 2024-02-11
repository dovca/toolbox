import {expect, test} from 'bun:test';
import {every} from '../../src';

const positive = (x: number) => x > 0;

test('every: check value', () => {
	expect(every(positive)([])).toBe(true);
	expect(every(positive)([0])).toBe(false);
	expect(every(positive)([1, 2, 3, 4, 5])).toBe(true);
	expect(every(positive)([4, 3, 2, 1, 0])).toBe(false);
});
