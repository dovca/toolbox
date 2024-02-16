import {expect, test} from 'bun:test';
import {spread} from '../../src';

test('spread', () => {
	const fn = (a: number, b: number, c: number) => a + b + c;

	expect(spread(fn)([1, 2, 3])).toBe(6);
});
