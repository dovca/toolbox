import {expect, test} from 'bun:test';
import {bindCurried} from '../../src';

test('bindCurried: nullary', () => {
	const fn0 = () => 0;
	const bound = bindCurried(fn0);

	expect(bound()()).toBe(0);
});

test('bindCurried: unary', () => {
	const fn1 = (a: number) => a;
	const bound = bindCurried(fn1);

	expect(bound()(1)).toBe(1);
	expect(bound(1)()).toBe(1);
});

test('bindCurried: binary', () => {
	const fn2 = (a: number) => (b: number) => a + b;
	const bound = bindCurried(fn2);

	expect(bound()(1)(2)).toBe(3);
	expect(bound(1)(2)).toBe(3);
	expect(bound(1, 2)()).toBe(3);
});

test('bindCurried: ternary', () => {
	const fn3 = (a: number) => (b: number) => (c: number) => a + b + c;
	const bound = bindCurried(fn3);

	expect(bound()(1)(2)(3)).toBe(6);
	expect(bound(1)(2)(3)).toBe(6);
	expect(bound(1, 2)(3)).toBe(6);
	expect(bound(1, 2, 3)()).toBe(6);
});

test('bindCurried: quaternary', () => {
	const fn4 = (a: number) => (b: number) => (c: number) => (d: number) => a + b + c + d;
	const bound = bindCurried(fn4);

	expect(bound()(1)(2)(3)(4)).toBe(10);
	expect(bound(1)(2)(3)(4)).toBe(10);
	expect(bound(1, 2)(3)(4)).toBe(10);
	expect(bound(1, 2, 3)(4)).toBe(10);
	expect(bound(1, 2, 3, 4)()).toBe(10);
});

test('bindCurried: quinary', () => {
	const fn5 = (a: number) => (b: number) => (c: number) => (d: number) => (e: number) => a + b + c + d + e;
	const bound = bindCurried(fn5);

	expect(bound()(1)(2)(3)(4)(5)).toBe(15);
	expect(bound(1)(2)(3)(4)(5)).toBe(15);
	expect(bound(1, 2)(3)(4)(5)).toBe(15);
	expect(bound(1, 2, 3)(4)(5)).toBe(15);
	expect(bound(1, 2, 3, 4)(5)).toBe(15);
	expect(bound(1, 2, 3, 4, 5)()).toBe(15);
});
