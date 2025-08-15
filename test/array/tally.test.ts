import {expect, test} from 'bun:test';
import {isEven, tally} from '../../src';

test('tally', () => {
	const fn = tally();
	expect(fn([1, 2, 3, 4, 5])).toBe(5);
	expect(fn([1, 2, 0, 4, false])).toBe(3);
});

test('tally with custom filter', () => {
	const fn = tally(isEven);
	expect(fn([1, 2, 3, 4, 5])).toBe(2);
});
