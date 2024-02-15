import {expect, test} from 'bun:test';
import {funnel} from '../../src/function/funnel';

test('funnel', () => {
	expect(funnel(
		(a: number) => -a,
	)(1)).toBe(-1);
	expect(funnel(
		(a: number, b: number) => a + b,
		(a: number) => -a,
	)(1, 2)).toBe(-3);
	expect(funnel(
		(a: number, b: number, c: number) => a + b + c,
		(a: number) => -a,
	)(1, 2, 3)).toBe(-6);
	expect(funnel(
		(a: number, b: number, c: number, d: number) => a + b + c + d,
		(a: number) => -a,
	)(1, 2, 3, 4)).toBe(-10);
	expect(funnel(
		(a: number, b: number, c: number, d: number, e: number) => a + b + c + d + e,
		(a: number) => -a,
	)(1, 2, 3, 4, 5)).toBe(-15);
});
