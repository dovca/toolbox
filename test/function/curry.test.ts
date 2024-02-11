import {expect, test} from 'bun:test';
import {curry} from '../../src';

test('curry', () => {
	const fn0 = () => 1;
	const fn1 = (a: number) => a;
	const fn2 = (a: number, b: number) => a + b;
	const fn3 = (a: number, b: number, c: number) => a + b + c;
	const fn4 = (a: number, b: number, c: number, d: number) => a + b + c + d
	const fn5 = (a: number, b: number, c: number, d: number, e: number) => a + b + c + d + e;

	expect(curry(fn0)()).toBe(1);
	expect(curry(fn1)(1)).toBe(1);
	expect(curry(fn2)(1)(2)).toBe(3);
	expect(curry(fn3)(1)(2)(3)).toBe(6);
	expect(curry(fn4)(1)(2)(3)(4)).toBe(10);
	expect(curry(fn5)(1)(2)(3)(4)(5)).toBe(15);
});
