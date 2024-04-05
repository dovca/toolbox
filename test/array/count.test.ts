import {expect, test} from 'bun:test';
import {count, countWith, round, length} from '../../src';

test('count', () => {
	expect(count([])).toEqual({});
	expect(count([1])).toEqual({1: 1});
	expect(count([1, 1])).toEqual({1: 2});
	expect(count([1, 2, 3])).toEqual({1: 1, 2: 1, 3: 1});
	expect(count(['foo', 'bar', 'foo'])).toEqual({foo: 2, bar: 1});
});

test('countWith', () => {
	expect(countWith(round)([])).toEqual({});
	expect(countWith(round)([1.2])).toEqual({1: 1});
	expect(countWith(round)([1.3, 1.2, 1.6])).toEqual({1: 2, 2: 1});
	expect(countWith<string>(length)(['foo', 'bar', 'hello'])).toEqual({3: 2, 5: 1});
});
