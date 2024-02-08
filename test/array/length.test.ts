import {expect, test} from 'bun:test';
import {length} from '../../src/array/length';

test('length', () => {
	expect(length([])).toBe(0);
	expect(length([0, 0, 0])).toBe(3);
	expect(length([,,,,])).toBe(4);
});
