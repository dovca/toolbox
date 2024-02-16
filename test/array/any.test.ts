import {expect, test} from 'bun:test';
import {any} from '../../src';

test('any', () => {
	const isPositive = (n: number) => n > 0;
	const isEven = (n: number) => n % 2 === 0;

	expect(any()(0)).toBe(false);
	expect(any(isPositive)(0)).toBe(false);
	expect(any(isPositive, isEven)(-1)).toBe(false);
	expect(any(isPositive, isEven)(0)).toBe(true);
	expect(any(isPositive, isEven)(1)).toBe(true);
});
