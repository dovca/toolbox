import {expect, test} from 'bun:test';
import {groupBy} from '../../src';

test('groupBy: callback', () => {
	const groupByFloor = groupBy<number>(Math.floor);

	expect(groupByFloor([])).toEqual({});
	expect(groupByFloor([1.1, 2.2, 2.3, 4, 2.1])).toEqual({1: [1.1], 2: [2.2, 2.3, 2.1], 4: [4]});
});

test('groupBy: string key', () => {
	const val1 = {key: 'a', value: 1};
	const val2 = {key: 'b', value: 2};
	const val3 = {key: 'a', value: 2};

	const groupByKey = groupBy('key');
	const groupByValue = groupBy('value');

	expect(groupByKey([])).toEqual({});
	expect(groupByKey([val1, val2, val3])).toEqual({a: [val1, val3], b: [val2]});
	expect(groupByValue([val1, val2, val3])).toEqual({1: [val1], 2: [val2, val3]});
});
