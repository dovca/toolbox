import {expect, test} from 'bun:test';
import {append, mapKeys, prepend, upperCase, lowerCase} from '../../src';

type Obj = {a: number; b: number};

test('mapKeys', () => {
	const obj: Obj = {a: 1, b: 2};

	expect(mapKeys<Obj, 'key_'>(prepend('key_'))(obj)).toEqual({key_a: 1, key_b: 2});
	expect(mapKeys<Obj, '_2'>(append('_2'))(obj)).toEqual({a_2: 1, b_2: 2});
	expect(mapKeys<Obj>(upperCase)(obj)).toEqual({A: 1, B: 2});
	expect(mapKeys<Obj>(lowerCase)(obj)).toEqual({a: 1, b: 2});
});
