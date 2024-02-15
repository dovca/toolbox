import {expect, test} from 'bun:test';
import {match} from '../../src';

test('match', () => {
	expect(match(/a/)('abc')).toEqual(['a']);
	expect(match(/a/g)('abc')).toEqual(['a']);
	expect(match(/a/g)('abcabc')).toEqual(['a', 'a']);
	expect(match(/a/g)('')).toEqual(null);
});
