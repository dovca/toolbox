import {expect, test} from 'bun:test';
import {all} from '../../src';

test('all', () => {
	const isPositive = (n: number) => n > 0;
	const isEven = (n: number) => n % 2 === 0;

	expect(all()(0)).toBe(true);
	expect(all(isEven)(0)).toBe(true);
	expect(all(isPositive, isEven)(0)).toBe(false);
	expect(all(isPositive, isEven)(1)).toBe(false);
	expect(all(isPositive, isEven)(2)).toBe(true);
	expect(all(isPositive, isEven)(3)).toBe(false);
});
