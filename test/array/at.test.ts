import {expect, test} from 'bun:test';
import {at} from '../../src';

test('at', () => {
	expect(at(0)([])).toBe(undefined);
	expect(at(0)([1])).toBe(1);
	expect(at(1)([1])).toBe(undefined);
	expect(at(1)([1, 2])).toBe(2);
	expect(at(-1)([1, 2, 3])).toBe(3);
	expect(at(-5)([1, 2, 3])).toBe(undefined);
});
