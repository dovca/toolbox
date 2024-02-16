import {expect, test} from 'bun:test';
import {slice} from '../../src';

test('slice: string', () => {
	expect(slice()('')).toBe('');
	expect(slice()('hello')).toBe('hello');
	expect(slice(2)('hello')).toBe('llo')
	expect(slice(0, 3)('hello')).toBe('hel');
	expect(slice(1, -1)('hello')).toBe('ell');
	expect(slice(10)('hello')).toBe('');
});

test('slice: array', () => {
	expect(slice<unknown[]>()([])).toEqual([]);
	expect(slice<unknown[]>(1)([])).toEqual([]);
	expect(slice<number[]>()([1, 2, 3])).toEqual([1, 2, 3]);
	expect(slice<number[]>(1)([1, 2, 3])).toEqual([2, 3]);
	expect(slice<number[]>(1, -1)([1, 2, 3])).toEqual([2]);
	expect(slice<number[]>(10)([1, 2, 3])).toEqual([]);
	expect(slice<string[]>(1, 3)(['a', 'b', 'c', 'd'])).toEqual(['b', 'c']);
});
