import {expect, test} from 'bun:test';
import {type Dictionary, isUppercase, valuesWhere} from '../../src';

test('valuesWhere', () => {
	expect(valuesWhere<Dictionary<number>>(isUppercase)({})).toEqual([]);
	expect(valuesWhere<Dictionary<number>>(isUppercase)({a: 1, b: 2, C: 3, D: 4})).toEqual([3, 4]);
	expect(valuesWhere<Dictionary<number>>(isUppercase)({a: 1, b: 2, c: 3, d: 4})).toEqual([]);
});
