import {expect, test} from 'bun:test';
import {toArray} from '../../src';

test('test', () => {
	expect(toArray(undefined)).toEqual([undefined]);
	expect(toArray(null)).toEqual([null]);
	expect(toArray(1)).toEqual([1]);
	expect(toArray('')).toEqual(['']);
	expect(toArray([])).toEqual([]);
	expect(toArray([1, 2, 3])).toEqual([1, 2, 3]);
	expect(toArray({})).toEqual([{}]);
});
