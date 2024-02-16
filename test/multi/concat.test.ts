import {expect, test} from 'bun:test';
import {concat} from '../../src';

test('concat: string', () => {
	expect(concat('')('')).toBe('');
	expect(concat('')('a')).toBe('a');
	expect(concat('a')('')).toBe('a');
	expect(concat('a')('b')).toBe('ba');
});

test('concat: array', () => {
	expect(concat([])([])).toEqual([]);
	expect(concat([])([1])).toEqual([1]);
	expect(concat([1])([])).toEqual([1]);
	expect(concat([1])([2])).toEqual([2, 1]);
});
