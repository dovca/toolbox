import {expect, test} from 'bun:test';
import {type Dictionary, someValue} from '../../src';

test('someValue', () => {
	expect(someValue<Dictionary<number>>((x) => x > 2)({a: 1, b: 2, c: 3})).toBe(true);
	expect(someValue<Dictionary<number>>((x) => x > 5)({a: 1, b: 2, c: 3})).toBe(false);
});
