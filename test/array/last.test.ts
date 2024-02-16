import {expect, test} from 'bun:test';
import {last} from '../../src';

test('last', () => {
	expect(last([])).toBe(undefined);
	expect(last([1])).toBe(1);
	expect(last([1, 2, 3])).toBe(3);
	expect(last([undefined])).toBe(undefined);
	expect<number | undefined>(last([1, undefined])).toBe(undefined);
});
