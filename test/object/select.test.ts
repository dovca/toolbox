import {expect, test} from 'bun:test';
import {isNumber, isString, omit, omitByKeys, omitByValues, pick, pickByKeys, pickByValues} from '../../src';

test('pick', () => {
	const obj = {a: 1, b: 2, c: 3};

	expect(pick()({})).toEqual({});
	expect(pick()({a: 1, b: 2, c: 3})).toEqual({});
	expect(pick('a')(obj)).toEqual({a: 1});
	expect(pick('a', 'b')(obj)).toEqual({a: 1, b: 2});
	expect(pick('a', 'b', 'c')(obj)).toEqual({a: 1, b: 2, c: 3});
	expect(pick('a', 'b', 'd')(obj)).toEqual({a: 1, b: 2});
	expect(pick('d', 'e')(obj)).toEqual({});
});

test('pickByKeys', () => {
	const obj = {a: 1, aa: 2, bbb: 3};

	expect(pickByKeys<typeof obj>((key) => isString(key))(obj)).toEqual(obj);
	expect(pickByKeys<typeof obj>((key) => key.startsWith('a'))(obj)).toEqual({a: 1, aa: 2});
	expect(pickByKeys<typeof obj>((key) => key.length === 2)(obj)).toEqual({aa: 2});
	expect(pickByKeys<typeof obj>((key) => key === 'a')(obj)).toEqual({a: 1});
	expect(pickByKeys<typeof obj>((key) => key.includes('c'))(obj)).toEqual({});
});

test('pickByValues', () => {
	const obj = {a: 1, aa: 2, bbb: 3};

	expect(pickByValues<typeof obj>((val) => isNumber(val))(obj)).toEqual(obj);
	expect(pickByValues<typeof obj>((val) => val < 3)(obj)).toEqual({a: 1, aa: 2});
	expect(pickByValues<typeof obj>((val) => val === 2)(obj)).toEqual({aa: 2});
	expect(pickByValues<typeof obj>((val) => val < 1)(obj)).toEqual({});
});

test('omit', () => {
	const obj = {a: 1, b: 2, c: 3};

	expect(omit()({})).toEqual({});
	expect(omit()(obj)).toEqual(obj);
	expect(omit('a')(obj)).toEqual({b: 2, c: 3});
	expect(omit('a', 'b')(obj)).toEqual({c: 3});
	expect(omit('a', 'b', 'c')(obj)).toEqual({});
});

test('omitByKeys', () => {
	const obj = {a: 1, aa: 2, bbb: 3};

	expect(omitByKeys<typeof obj>((key) => isString(key))(obj)).toEqual({});
	expect(omitByKeys<typeof obj>((key) => key.startsWith('a'))(obj)).toEqual({bbb: 3});
	expect(omitByKeys<typeof obj>((key) => key.length === 2)(obj)).toEqual({a: 1, bbb: 3});
	expect(omitByKeys<typeof obj>((key) => key === 'a')(obj)).toEqual({aa: 2, bbb: 3});
	expect(omitByKeys<typeof obj>((key) => key.includes('c'))(obj)).toEqual(obj);
});

test('omitByValues', () => {
	const obj = {a: 1, aa: 2, bbb: 3};

	expect(omitByValues<typeof obj>((val) => isNumber(val))(obj)).toEqual({});
	expect(omitByValues<typeof obj>((val) => val < 3)(obj)).toEqual({bbb: 3});
	expect(omitByValues<typeof obj>((val) => val === 2)(obj)).toEqual({a: 1, bbb: 3});
	expect(omitByValues<typeof obj>((val) => val < 1)(obj)).toEqual(obj);
});
