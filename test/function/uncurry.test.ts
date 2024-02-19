import {expect, test} from 'bun:test';
import {uncurry} from '../../src';

test('uncurry', () => {
	const fn0 = () => 0;
	const fn1 = (a: number) => a;
	const fn2 = (a: number) => (b: number) => a + b;
	const fn3 = (a: number) => (b: number) => (c: number) => a + b + c;
	const fn4 = (a: number) => (b: number) => (c: number) => (d: number) => a + b + c + d;
	const fn5 = (a: number) => (b: number) => (c: number) => (d: number) => (e: number) => a + b + c + d + e;

	expect(uncurry(fn0)()).toBe(0);
	expect(uncurry(fn1)(1)).toBe(1);
	expect(uncurry(fn2)(1, 2)).toBe(3);
	expect(uncurry(fn3)(1, 2, 3)).toBe(6);
	expect(uncurry(fn4)(1, 2, 3, 4)).toBe(10);
	expect(uncurry(fn5)(1, 2, 3, 4, 5)).toBe(15);
});
