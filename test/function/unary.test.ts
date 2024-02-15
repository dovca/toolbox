import {expect, test} from 'bun:test';
import {unary} from '../../src';

test('unary', () => {
	const fn = (a: number, b?: number, c?: number) => a + (b ?? 0) + (c ?? 0);

	expect(fn(1, 10, 100)).toEqual(111);
	expect(unary(fn)(1)).toEqual(1);
	expect(unary(fn)(1, 10)).toEqual(1);
	expect(unary(fn)(1, 10, 100)).toEqual(1);
	expect(unary(fn)(1, 10, 100, 1000)).toEqual(1);
});
