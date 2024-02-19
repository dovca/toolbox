import {expect, test} from 'bun:test';
import {increment, repeat, append} from '../../src';

test('repeat', () => {
	expect(repeat(0, increment)(0)).toEqual(0);
	expect(repeat(1, increment)(0)).toEqual(1);
	expect(repeat(3, increment)(1)).toEqual(4);
	expect(repeat(3, append('abc'))('abc')).toEqual('abcabcabcabc');
	expect(repeat(3, append())('abc')).toEqual('abcabcabcabcabcabcabcabc');
});
