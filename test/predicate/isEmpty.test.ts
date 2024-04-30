import {expect, test} from 'bun:test';
import {isEmpty} from '../../src';

test('isEmpty', () => {
	expect(isEmpty(undefined)).toBe(true);
	expect(isEmpty('')).toBe(true);
	expect(isEmpty(null)).toBe(true);
	expect(isEmpty([])).toBe(true);
	expect(isEmpty({})).toBe(true);
	expect(isEmpty(0)).toBe(false);
	expect(isEmpty(' ')).toBe(false);
	expect(isEmpty([0])).toBe(false);
	expect(isEmpty({a: 0})).toBe(false);
});
