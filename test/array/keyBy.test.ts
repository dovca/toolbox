import {expect, test} from 'bun:test';
import {keyBy} from '../../src';

type Obj = {id: 'a' | 'b', value: number};

test('keyBy: callback', () => {
	const keyByFloor = keyBy(Math.floor);

	expect(keyByFloor([])).toEqual({});
	expect(keyByFloor([1.1, 2.2, 1.2, 3.3])).toEqual({1: 1.2, 2: 2.2, 3: 3.3});
});

test('keyBy: string key', () => {
	const val1: Obj = {id: 'a', value: 1};
	const val2: Obj = {id: 'b', value: 2};
	const val3: Obj = {id: 'a', value: 2};

	const keyById = keyBy<Obj, 'id'>('id');
	const keyByValue = keyBy<Obj, 'value'>('value');

	expect(keyById([])).toEqual({});
	expect(keyById([val1, val2, val3])).toEqual({a: val3, b: val2});
	expect(keyByValue([val1, val2, val3])).toEqual({1: val1, 2: val3});
	expect(keyBy('id')([val1, val2, val3, {id: 4}])).toEqual({a: val3, b: val2, 4: {id: 4}});
});
