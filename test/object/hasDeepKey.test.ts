import {expect, test} from 'bun:test';
import {hasDeepKey} from '../../src/object/hasDeepKey';

test('hasDeepKey', () => {
	expect(hasDeepKey('a.b.c')({a: {b: {c: {}}}})).toBe(true);
	expect(hasDeepKey('a.b')({a: {b: {c: 1}}})).toBe(true);
	expect(hasDeepKey('a.b.c')({a: {b: {}}})).toBe(false);
	expect(hasDeepKey('a.b.c')({a: {b: 1}})).toBe(false);
});
