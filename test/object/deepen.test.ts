import {expect, test} from 'bun:test';
import {deepen} from '../../src';

test('deepen', () => {
	expect(deepen({})).toEqual({});
	expect(deepen({a: 1})).toEqual({a: 1});
	expect(deepen({'a/b/2/c': 1}, '/')).toEqual({a: {b: [undefined, undefined, {c: 1}]}});
	expect(deepen({a: {b: {c: 1}}, 'a.b': 2})).toEqual({a: {b: 2}});
	expect(() => deepen({a: 1, 'a.b': 2})).toThrow();
});
