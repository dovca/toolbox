import {expect, test} from 'bun:test';
import {some} from '../../src/array';

const positive = (x: number) => x > 0;

test('test', () => {
	expect(some(positive)([])).toBe(false);
	expect(some(positive)([0])).toBe(false);
	expect(some(positive)([0, 0, 0, 1])).toBe(true);
	expect(some(positive)([1, 2, 3])).toBe(true);
});
