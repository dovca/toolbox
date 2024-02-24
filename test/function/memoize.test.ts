import {expect, test, jest} from 'bun:test';
import {memoize} from '../../src';

test('memoize', () => {
	const fn = jest.fn((a: number, b: number) => a + b);
	const memoizedFn = memoize(fn);

	expect(memoizedFn(1, 2)).toBe(3);
	expect(fn).toHaveBeenCalledTimes(1);
	expect(memoizedFn(1, 2)).toBe(3);
	expect(fn).toHaveBeenCalledTimes(1);
	expect(memoizedFn(2, 3)).toBe(5);
	expect(fn).toHaveBeenCalledTimes(2);
});
