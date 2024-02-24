import {expect, test} from 'bun:test';
import {decapitate, head, slice, tail} from '../../src';

test('slice: string', () => {
	expect(slice()('')).toBe('');
	expect(slice()('hello')).toBe('hello');
	expect(slice(2)('hello')).toBe('llo');
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

test('head', () => {
	expect(head()('')).toBe('');
	expect(head()('hello')).toBe('h');
	expect(head(2)('hello')).toBe('he');
	expect(head<number[]>()([])).toEqual([]);
	expect(head<number[]>()([1, 2, 3])).toEqual([1]);
	expect(head<number[]>(2)([1, 2, 3])).toEqual([1, 2]);
});

test('tail', () => {
	expect(tail()('')).toBe('');
	expect(tail()('hello')).toBe('o');
	expect(tail(2)('hello')).toBe('lo');
	expect(tail<number[]>()([])).toEqual([]);
	expect(tail<number[]>()([1, 2, 3])).toEqual([3]);
	expect(tail<number[]>(2)([1, 2, 3])).toEqual([2, 3]);
});

test('decapitate', () => {
	expect(decapitate('')).toEqual(['', '']);
	expect(decapitate('a')).toEqual(['a', '']);
	expect(decapitate('hello')).toEqual(['h', 'ello']);
	expect<[unknown, unknown[]]>(decapitate([])).toEqual([undefined, []]);
	expect<[number, number[]]>(decapitate([1])).toEqual([1, []]);
	expect<[number, number[]]>(decapitate([1, 2, 3])).toEqual([1, [2, 3]]);
});
