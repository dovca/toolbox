import {expect, test} from 'bun:test';
import {type Dictionary, isUppercase, someKey} from '../../src';

test('someKey', () => {
	expect(someKey<Dictionary<number>>(isUppercase)({A: 1, b: 2, c: 3})).toBe(true);
	expect(someKey<Dictionary<number>>(isUppercase)({a: 1, b: 2, c: 3})).toBe(false);
});
