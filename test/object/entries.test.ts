import {expect, test} from 'bun:test';
import {entries} from '../../src';

test('entries', () => {
	expect(entries({})).toEqual([]);
	expect(entries({a: 1})).toEqual([['a', 1]]);
	expect(entries({a: 1, b: 2})).toEqual([['a', 1], ['b', 2]]);
	expect(entries({1: 1, '2': 2})).toEqual([['1', 1], ['2', 2]]);

	const obj = {a: 1, b: 2};
	const result = entries({obj});
	expect(result).toEqual([['obj', obj]]);
	expect(result[0][1]).toBe(obj);
});
