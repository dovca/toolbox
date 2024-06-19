import {expect, test} from 'bun:test';
import {flatten} from '../../src';

test('flatten', () => {
	expect(flatten()({})).toEqual({});
	expect(flatten()({3: 1})).toEqual({'"3"': 1});
	expect(flatten()({a: {3: {c: 1}}})).toEqual({'a."3".c': 1});
	expect(flatten('/', '_')({a: {b: [{c: 1}]}})).toEqual({'_a/b/0/c': 1});
});
