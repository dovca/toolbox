import {expect, test} from 'bun:test';
import {split} from '../../src';

test('split', () => {
	expect(split('')('')).toEqual([]);
	expect(split('')('a')).toEqual(['a']);
	expect(split('')('abc')).toEqual(['a', 'b', 'c']);
	expect(split('a')('abc')).toEqual(['', 'bc']);
	expect(split(' ')('a b c')).toEqual(['a', 'b', 'c']);
	expect(split(/\d+/)('a1bc23def456ghijk')).toEqual(['a', 'bc', 'def', 'ghijk']);
});
