import {expect, test} from 'bun:test';
import {unique, uniqueWith, length} from '../../src';

test('unique', () => {
	expect(unique([])).toEqual([]);
	expect(unique([1])).toEqual([1]);
	expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
	expect(unique([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
	expect(unique([1, 2, 3, 1, 2, 3])).toEqual([1, 2, 3]);
});

test('uniqueWith', () => {
	const uniqueWithLength = uniqueWith(length);
	expect(uniqueWithLength([])).toEqual([]);
	expect(uniqueWithLength(['a'])).toEqual(['a']);
	expect(uniqueWithLength(['abc', 'foo', 'hello', 'world'])).toEqual(['abc', 'hello']);
});
