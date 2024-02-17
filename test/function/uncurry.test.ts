import {expect, test} from 'bun:test';
import {uncurry} from '../../src';

test('uncurry: nullary', () => {
	const nullary = () => 0;
	const u0 = uncurry(nullary)();

	expect(u0).toBeFunction();
	expect(u0()).toBe(0);
});

test('uncurry: unary', () => {
	const unary = (a: number) => a;
	const u0 = uncurry(unary)();
	const u1 = uncurry(unary)(1);

	expect(u0).toBeFunction()
	expect(u1).toBeFunction();
	expect(u0(1)).toBe(1);
	expect(u1()).toBe(1);
});

test('uncurry: binary', () => {
	const binary = (a: number) => (b: number) => a + b;
	const u0 = uncurry(binary)();
	const u1 = uncurry(binary)(1);
	const u2 = uncurry(binary)(1, 2);

	expect(u0).toBeFunction();
	expect(u1).toBeFunction();
	expect(u2).toBeFunction();
	expect(u0(1)(2)).toBe(3);
	expect(u1(2)).toBe(3);
	expect(u2()).toBe(3);
});

test('uncurry: ternary', () => {
	const ternary = (a: number) => (b: number) => (c: number) => a + b + c;
	const u0 = uncurry(ternary)();
	const u1 = uncurry(ternary)(1);
	const u2 = uncurry(ternary)(1, 2);
	const u3 = uncurry(ternary)(1, 2, 3);

	expect(u0).toBeFunction();
	expect(u1).toBeFunction();
	expect(u2).toBeFunction();
	expect(u3).toBeFunction();
	expect(u0(1)(2)(3)).toBe(6);
	expect(u1(2)(3)).toBe(6);
	expect(u2(3)).toBe(6);
	expect(u3()).toBe(6);
});

test('uncurry: quaternary', () => {
	const quaternary = (a: number) => (b: number) => (c: number) => (d: number) => a + b + c + d;
	const u0 = uncurry(quaternary)();
	const u1 = uncurry(quaternary)(1);
	const u2 = uncurry(quaternary)(1, 2);
	const u3 = uncurry(quaternary)(1, 2, 3);
	const u4 = uncurry(quaternary)(1, 2, 3, 4);

	expect(u0).toBeFunction();
	expect(u1).toBeFunction();
	expect(u2).toBeFunction();
	expect(u3).toBeFunction();
	expect(u4).toBeFunction();
	expect(u0(1)(2)(3)(4)).toBe(10);
	expect(u1(2)(3)(4)).toBe(10);
	expect(u2(3)(4)).toBe(10);
	expect(u3(4)).toBe(10);
	expect(u4()).toBe(10);
});

test('uncurry: quinary', () => {
	const quinary = (a: number) => (b: number) => (c: number) => (d: number) => (e: number) => a + b + c + d + e;
	const u0 = uncurry(quinary)();
	const u1 = uncurry(quinary)(1);
	const u2 = uncurry(quinary)(1, 2);
	const u3 = uncurry(quinary)(1, 2, 3);
	const u4 = uncurry(quinary)(1, 2, 3, 4);
	const u5 = uncurry(quinary)(1, 2, 3, 4, 5);

	expect(u0).toBeFunction();
	expect(u1).toBeFunction();
	expect(u2).toBeFunction();
	expect(u3).toBeFunction();
	expect(u4).toBeFunction();
	expect(u5).toBeFunction();
	expect(u0(1)(2)(3)(4)(5)).toBe(15);
	expect(u1(2)(3)(4)(5)).toBe(15);
	expect(u2(3)(4)(5)).toBe(15);
	expect(u3(4)(5)).toBe(15);
	expect(u4(5)).toBe(15);
	expect(u5()).toBe(15);
});
