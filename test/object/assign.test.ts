import {expect, test} from 'bun:test';
import {assign} from '../../src';

test('assign', () => {
	expect(assign({})({})).toEqual({});
	expect(assign({a: 1})({a: 2})).toEqual({a: 1});
	expect(assign({a: 1})({b: 1})).toEqual({a: 1, b: 1});
	expect(assign({a: 1})({a: 'foo'})).toEqual({a: 1});
	expect(assign({a: null})({a: 1})).toEqual({a: null});
	expect(assign({a: undefined})({a: 1})).toEqual({});
	expect(assign({a: undefined})({a: undefined})).toEqual({});
});
