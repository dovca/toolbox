import {expect, test} from 'bun:test';
import {includes} from '../../src';

test('includes', () => {
	expect(includes(0)([])).toBe(false);
	expect(includes(0)([0, 1, 2])).toBe(true);
	expect(includes(3)([0, 1, 2])).toBe(false);
	expect(includes('a')('abc')).toBe(true);
	expect(includes('d')('abc')).toBe(false);
});
