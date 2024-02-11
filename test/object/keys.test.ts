import {expect, test} from 'bun:test';
import {keys} from '../../src';

test('keys', () => {
	expect(keys({})).toEqual([]);
	expect(keys({a: 1})).toEqual(['a']);
	expect(keys({a: 1, b: 2, '3': 3})).toEqual(['3', 'a', 'b']);
	expect(keys({a: 1, b: 2, 3: 3})).toEqual(['3', 'a', 'b']);
});
