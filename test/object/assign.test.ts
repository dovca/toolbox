import {expect, test} from 'bun:test';
import {assign} from '../../src';

test('assign', () => {
	expect(assign('a.b.0.c', 1)({})).toEqual({a: {b: [{c: 1}]}});
	expect(assign('a.b."0".c', 1)({})).toEqual({a: {b: {0: {c: 1}}}});
	expect(assign('a', 1)({a: {b: {c: 2}}})).toEqual({a: 1});
	expect(assign('0.0.0', 2)([])).toEqual([[[2]]]);
	expect(assign('"0"."0"."0"', 2)({})).toEqual({0: {0: {0: 2}}});
	expect(() => assign('a.b.c', 2)({a: {b: 1}})).toThrow();
});
