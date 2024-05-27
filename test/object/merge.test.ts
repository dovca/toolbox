import {expect, test} from 'bun:test';
import {merge, mergeWith} from '../../src';

test('merge', () => {
	expect(merge({})({})).toEqual({});
	expect(merge({a: 1})({a: 2})).toEqual({a: 1});
	expect(merge({a: 1})({b: 1})).toEqual({a: 1, b: 1});
	expect(merge({a: 1})({a: 'foo'})).toEqual({a: 1});
	expect(merge({a: null})({a: 1})).toEqual({a: null});
	expect(merge({a: undefined})({a: 1})).toEqual({a: undefined});
	expect(merge({a: undefined})({a: undefined})).toEqual({a: undefined});
});

test('mergeWith', () => {
	const mergeWithSum = mergeWith((_, a, b) => a + b);

	expect(mergeWithSum({})({})).toEqual({});
	expect(mergeWithSum({a: 1})({})).toEqual({a: 1});
	expect(mergeWithSum({})({a: 1})).toEqual({a: 1});
	expect(mergeWithSum({a: 1})({a: 2})).toEqual({a: 3});
	expect(mergeWithSum({a: 1, c: 1})({b: 1})).toEqual({a: 1, b: 1, c: 1});
	expect(mergeWithSum({a: 1})({a: 'foo'})).toEqual({a: 'foo1'});

	const xorMerge = mergeWith(() => undefined);

	expect(xorMerge({a: 1, b: 2})({b: 1, c: 3})).toEqual({a: 1, b: undefined, c: 3});
})
