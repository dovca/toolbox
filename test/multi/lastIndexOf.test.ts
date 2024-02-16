import {expect, test} from 'bun:test';
import {lastIndexOf} from '../../src';

test('lastIndexOf', () => {
	expect([0, 1, 2, 1].lastIndexOf(1)).toBe(3);
	expect(lastIndexOf(0)([])).toBe(-1);
	expect(lastIndexOf(0)([0, 1, 2, 1])).toBe(0);
	expect(lastIndexOf(2)([0, 1, 2, 1])).toBe(2);
	expect(lastIndexOf(1)([0, 1, 2, 1])).toBe(3);
	expect(lastIndexOf(1)([0, 1, 2, 1, 'a', 3])).toBe(3);
	expect(lastIndexOf(3)([0, 1, 2, 1])).toBe(-1);
	expect(lastIndexOf('b')('abcba')).toBe(3);
	expect(lastIndexOf('d')('abcba')).toBe(-1);
	expect(lastIndexOf('b')(['a', 'b', 'c', 'b', 'a'])).toBe(3);
	expect(lastIndexOf('d')(['a', 'b', 'c', 'b', 'a'])).toBe(-1);
});
