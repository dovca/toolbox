import {expect, test} from 'bun:test';
import {type Dictionary, everyKey, isUppercase} from '../../src';

test('everyKey', () => {
	expect(everyKey<Dictionary<number>>(isUppercase)({A: 1, B: 2, C: 3})).toBe(true);
	expect(everyKey<Dictionary<number>>(isUppercase)({a: 1, B: 2, C: 3})).toBe(false);
});
