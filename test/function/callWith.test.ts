import {expect, test} from 'bun:test';
import {callWith} from '../../src';

test('callWith', () => {
	const fn0 = () => 7;
	const fn1 = (a: number) => a + 1;
	const fn2 = (a: number, b: number) => a + b;
	const fn3 = (a: number, b: number, c: number) => a + b + c;

	const arr = [1, 2, 3];

	expect(callWith()(fn0)).toBe(7);
	expect(callWith(1)(fn1)).toBe(2);
	expect(callWith(1, 2)(fn2)).toBe(3);
	expect(callWith(1, 2, 3)(fn3)).toBe(6);
	expect(callWith(...arr)(fn0)).toBe(7);
	expect(callWith(...arr)(fn1)).toBe(2);
	expect(callWith(...arr)(fn3)).toBe(6);
});
