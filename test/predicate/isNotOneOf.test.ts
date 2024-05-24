import {expect, test} from 'bun:test';
import {isNotOneOf} from '../../src';

test('isNotOneOf', () => {
	expect(isNotOneOf(1, 2, 3)(1)).toBe(false);
	expect(isNotOneOf(1, 2, 3)(4)).toBe(true);
});
