import {expect, test} from 'bun:test';
import {double, flow, mapValues} from '../../src';

test('mapValues', () => {
	const obj = {a: 1, b: 2} as const;

	expect(mapValues(double)({})).toEqual({});
	expect(mapValues(double)(obj)).toEqual({a: 2, b: 4});
	expect(flow(obj, mapValues((value, key) => `${key}:${value}`))).toEqual({a: 'a:1', b: 'b:2'});
	expect(mapValues<typeof obj, string>((value, key) => `${key}:${value}`)(obj)).toEqual({a: 'a:1', b: 'b:2'});
});
