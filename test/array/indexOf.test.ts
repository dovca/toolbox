import {expect, test} from 'bun:test';
import {indexOf, lastIndexOf} from '../../src/array';

test('indexOf', () => {
	expect(indexOf(0)([])).toBe(-1);
	expect(indexOf(0)([0, 1, 2, 1])).toBe(0);
	expect(indexOf(1)([0, 1, 2, 1])).toBe(1);
	expect(indexOf(3)([0, 1, 2, 1])).toBe(-1);
});

test('lastIndexOf', () => {
	expect(lastIndexOf(0)([])).toBe(-1);
	expect(lastIndexOf(0)([0, 1, 2, 1])).toBe(0);
	expect(lastIndexOf(1)([0, 1, 2, 1])).toBe(3);
	expect(lastIndexOf(3)([0, 1, 2, 1])).toBe(-1);
});
