import {expect, test} from 'bun:test';
import {merge, mergeInto, mergeIntoWith, mergeWith, operatorMinus, operatorPlus} from '../../src';

test('merge', () => {
	expect(merge({})({})).toEqual({});
	expect(merge({a: 1})({a: 2})).toEqual({a: 1});
	expect(merge({a: 1})({b: 1})).toEqual({a: 1, b: 1});
	expect(merge({a: 1})({a: 'foo'})).toEqual({a: 1});
	expect(merge({a: null})({a: 1})).toEqual({a: null});
	expect(merge({a: undefined})({a: 1})).toEqual({a: undefined});
	expect(merge({a: undefined})({a: undefined})).toEqual({a: undefined});
});

test('mergeInto', () => {
	expect(mergeInto({a: 1, c: 2})({a: 2, b: 2})).toEqual({a: 2, b: 2, c: 2});
});

test('mergeWith', () => {
	const mergeWithSum = mergeWith(operatorPlus);

	expect(mergeWithSum({})({})).toEqual({});
	expect(mergeWithSum({a: 1})({})).toEqual({a: 1});
	expect(mergeWithSum({})({a: 1})).toEqual({a: 1});
	expect(mergeWithSum({a: 1})({a: 2})).toEqual({a: 3});
	expect(mergeWithSum({a: 1, c: 1})({b: 1})).toEqual({a: 1, b: 1, c: 1});
	expect(mergeWithSum({a: 1})({a: 'foo'})).toEqual({a: 'foo1'});

	expect(mergeWith(operatorMinus)({a: 2, b: 1})({a: 3, b: 4})).toEqual({a: 1, b: 3});

	const xorMerge = mergeWith(() => undefined);

	expect(xorMerge({a: 1, b: 2})({b: 1, c: 3})).toEqual({a: 1, b: undefined, c: 3});
})

test('mergeIntoWith', () => {
	expect(mergeIntoWith(operatorMinus)({a: 2, b: 1})({a: 3, b: 4})).toEqual({a: -1, b: -3});
});
