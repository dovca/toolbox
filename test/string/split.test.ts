import {expect, test} from 'bun:test';
import {split, splitOnce} from '../../src';

test('split', () => {
	expect(split('')('')).toEqual([]);
	expect(split('')('a')).toEqual(['a']);
	expect(split('')('abc')).toEqual(['a', 'b', 'c']);
	expect(split('a')('abc')).toEqual(['', 'bc']);
	expect(split(' ')('a b c')).toEqual(['a', 'b', 'c']);
	expect(split(/\d+/)('a1bc23def456ghijk')).toEqual(['a', 'bc', 'def', 'ghijk']);
});

test('splitOnce', () => {
	expect(splitOnce('')('')).toEqual(['', '']);
	expect(splitOnce('')('a')).toEqual(['a', '']);
	expect(splitOnce('')('abc')).toEqual(['a', 'bc']);
	expect(splitOnce('.')('a.b.c.d')).toEqual(['a', 'b.c.d']);
});
