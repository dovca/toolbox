import {expect, test} from 'bun:test';
import {isNumeric} from '../../src';

test('isNumeric', () => {
	expect(isNumeric(0)).toBe(true);
	expect(isNumeric(1)).toBe(true);
	expect(isNumeric('1')).toBe(true);
	expect(isNumeric('foo')).toBe(false);
	expect(isNumeric(null)).toBe(false);
});
