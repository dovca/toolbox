import {expect, test} from 'bun:test';
import {bind} from '../../src';

test('bind: nullary', () => {
	const fn0 = () => 0;
	const bound = bind(fn0);

	expect(bound()()).toBe(0);
});

test('bind: unary', () => {
	const fn1 = (a: number) => a;
	const bound = bind(fn1);

	expect(bound()(1)).toBe(1);
	expect(bound(1)()).toBe(1);
});

test('bind: binary', () => {
	const fn2 = (a: number, b: number) => a + b;
	const bound = bind(fn2);

	expect(bound()(1, 2)).toBe(3);
	expect(bound(1)(2)).toBe(3);
	expect(bound(1, 2)()).toBe(3);
});

test('bind: ternary', () => {
	const fn3 = (a: number, b: number, c: number) => a + b + c;
	const bound = bind(fn3);

	expect(bound()(1, 2, 3)).toBe(6);
	expect(bound(1)(2, 3)).toBe(6);
	expect(bound(1, 2)(3)).toBe(6);
	expect(bound(1, 2, 3)()).toBe(6);
});

test('bind: quaternary', () => {
	const fn4 = (a: number, b: number, c: number, d: number) => a + b + c + d;
	const bound = bind(fn4);

	expect(bound()(1, 2, 3, 4)).toBe(10);
	expect(bound(1)(2, 3, 4)).toBe(10);
	expect(bound(1, 2)(3, 4)).toBe(10);
	expect(bound(1, 2, 3)(4)).toBe(10);
	expect(bound(1, 2, 3, 4)()).toBe(10);
});

test('bind: quinary', () => {
	const fn5 = (a: number, b: number, c: number, d: number, e: number) => a + b + c + d + e;
	const bound = bind(fn5);

	expect(bound()(1, 2, 3, 4, 5)).toBe(15);
	expect(bound(1)(2, 3, 4, 5)).toBe(15);
	expect(bound(1, 2)(3, 4, 5)).toBe(15);
	expect(bound(1, 2, 3)(4, 5)).toBe(15);
	expect(bound(1, 2, 3, 4)(5)).toBe(15);
	expect(bound(1, 2, 3, 4, 5)()).toBe(15);
});
