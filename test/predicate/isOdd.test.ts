import {expect, test} from 'bun:test';
import {isOdd} from '../../src';

test('isOdd', () => {
	expect(isOdd(0)).toBe(false);
	expect(isOdd(1)).toBe(true);
	expect(isOdd(2)).toBe(false);
	expect(isOdd(-1)).toBe(true);
	expect(isOdd(-2)).toBe(false);
});
