import {expect, test} from 'bun:test';
import {omit} from '../../src';

test('omit', () => {
	const obj = {a: 1, b: 2, c: 3};

	expect(omit()({})).toEqual({});
	expect(omit()(obj)).toEqual(obj);
	expect(omit('a')(obj)).toEqual({b: 2, c: 3});
	expect(omit('a', 'b')(obj)).toEqual({c: 3});
	expect(omit('a', 'b', 'c')(obj)).toEqual({});
});
