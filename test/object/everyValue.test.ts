import {expect, test} from 'bun:test';
import {type Dictionary, everyValue} from '../../src';

test('everyValue', () => {
	expect(everyValue<Dictionary<number>>((x) => x < 5)({a: 1, b: 2, c: 3})).toBe(true);
	expect(everyValue<Dictionary<number>>((x) => x < 2)({a: 1, b: 2, c: 3})).toBe(false);
});
