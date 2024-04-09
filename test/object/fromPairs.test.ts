import {expect, test} from 'bun:test';
import {fromPairs} from '../../src';

test('fromPairs', () => {
	expect(fromPairs([])).toEqual({});
	expect(fromPairs([['a', 1], ['b', 2]])).toEqual({a: 1, b: 2});
	expect(fromPairs([['a', 1], ['b', 2], ['a', 3]])).toEqual({a: 3, b: 2});
});
