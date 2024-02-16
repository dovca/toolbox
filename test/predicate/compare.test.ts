import {expect, test} from 'bun:test';
import {isEqual, isNotEqual} from '../../src';

test('isEqual', () => {
	expect(isEqual(1)(1)).toBe(true);
	expect(isEqual(1)(2)).toBe(false);
	expect(isEqual('a')('a')).toBe(true);
	expect(isEqual('a')('b')).toBe(false);
	expect(isEqual({a: 1})({a: 1})).toBe(false);
});

test('isNotEqual', () => {
	expect(isNotEqual(1)(1)).toBe(false);
	expect(isNotEqual(1)(2)).toBe(true);
	expect(isNotEqual('a')('a')).toBe(false);
	expect(isNotEqual('a')('b')).toBe(true);
	expect(isNotEqual({a: 1})({a: 1})).toBe(true);
});
