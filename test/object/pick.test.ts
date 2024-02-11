import {expect, test} from 'bun:test';
import {pick} from '../../src';

test('pick', () => {
	const obj = {a: 1, b: 2, c: 3};

	expect(pick()({})).toEqual({});
	expect(pick()({a: 1, b: 2, c: 3})).toEqual({});
	expect(pick('a')(obj)).toEqual({a: 1});
	expect(pick('a', 'b')(obj)).toEqual({a: 1, b: 2});
	expect(pick('a', 'b', 'c')(obj)).toEqual({a: 1, b: 2, c: 3});
});
