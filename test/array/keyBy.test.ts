import {expect, test} from 'bun:test';
import {keyBy} from '../../src/array/keyBy';

test('keyBy: callback', () => {
	const keyByFloor = keyBy(Math.floor);

	expect(keyByFloor([])).toEqual({});
	expect(keyByFloor([1.1, 2.2, 1.2, 3.3])).toEqual({1: 1.2, 2: 2.2, 3: 3.3});
});

test('keyBy: string key', () => {
	const val1 = {id: 'a', value: 1};
	const val2 = {id: 'b', value: 2};
	const val3 = {id: 'a', value: 2};

	const keyById = keyBy('id');
	const keyByValue = keyBy('value');

	expect(keyById([])).toEqual({});
	expect(keyById([val1, val2, val3])).toEqual({a: val3, b: val2});
	expect(keyByValue([val1, val2, val3])).toEqual({1: val1, 2: val3});
});
