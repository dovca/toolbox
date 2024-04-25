import {expect, test} from 'bun:test';
import {toString} from '../../src';

test('toString', () => {
	expect(toString(0)).toBe('0');
	expect(toString(1)).toBe('1');
	expect(toString('')).toBe('');
	expect(toString('abc')).toBe('abc');
	expect(toString([])).toBe('');
	expect(toString([1, 2, 3])).toBe('1,2,3');
	expect(toString({})).toBe('[object Object]');
	expect(toString({a: 1, b: 2})).toBe('[object Object]');
	expect(toString(null)).toBe('null');
	expect(toString(undefined)).toBe('undefined');
	expect(toString(true)).toBe('true');
	expect(toString(false)).toBe('false');
	expect(toString<any>(NaN)).toBe('NaN');
	expect(toString([[[1, [2, 3]]]])).toBe('1,2,3');
});
