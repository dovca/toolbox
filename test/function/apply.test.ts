import {expect, test} from 'bun:test';
import {apply} from '../../src/function/apply';

test('apply', () => {
	expect(apply(() => 0)([])).toBe(0);
	expect(apply((a: number) => a)([1])).toBe(1);
	expect(apply((a: number, b: number) => a + b)([1, 2])).toBe(3);
	expect(apply((a: number, b: number, c: number) => a + b + c)([1, 2, 3])).toBe(6);
	expect(apply((a: number, b: number, c: number, d: number) => a + b + c + d)([1, 2, 3, 4])).toBe(10);
	expect(apply((a: number, b: number, c: number, d: number, e: number) => a + b + c + d + e)([1, 2, 3, 4, 5])).toBe(15);
});
