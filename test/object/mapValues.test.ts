import {expect, test} from 'bun:test';
import {double, mapValues} from '../../src';

test('mapValues', () => {
	const obj = {a: 1, b: 2};

	expect(mapValues(double)({})).toEqual({});
	expect(mapValues(double)(obj)).toEqual({a: 2, b: 4});
});
