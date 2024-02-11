import {expect, test} from 'bun:test';
import {mapValues} from '../../src';

type Obj = {a: number; b: number};

test('mapValues', () => {
	const obj = {a: 1, b: 2};
	const double = (x: number) => x * 2;

	expect(mapValues<Record<string, any>>(double)({})).toEqual({});
	expect(mapValues<Obj>(double)(obj)).toEqual({a: 2, b: 4});
});
