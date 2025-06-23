import {expect, test} from 'bun:test';
import {access} from '../../src';

test('access', () => {
	expect(access('a')({a: {b: 1}})).toEqual({b: 1});
	expect(access('a.b.0.c')({a: {b: [{c: 1}]}})).toBe(1);
	expect(access('a.b.c.d')({a: {b: 2}})).toBe(undefined);
	expect(access('...')({a: 1})).toEqual({a: 1});
	expect(access('')({a: 1})).toEqual({a: 1});
	expect(access('..a.....b.')({a: {b: 2}})).toEqual(2);
});
