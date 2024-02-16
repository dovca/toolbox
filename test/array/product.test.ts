import {expect, test} from 'bun:test';
import {product} from '../../src';

test('product', () => {
	expect(product([])).toBe(1);
	expect(product([1])).toBe(1);
	expect(product([1, 2])).toBe(2);
	expect(product([1, 2, 3])).toBe(6);
	expect(product([1, 2, 3, 4])).toBe(24);
});
