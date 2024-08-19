import {expect, test} from 'bun:test';
import {keysWhere} from '../../src/object/keysWhere';
import {type Dictionary, isGreaterThan} from '../../src';

test('keysWhere', () => {
	expect(keysWhere<Dictionary<number>>(isGreaterThan(2))({})).toEqual([]);
	expect(keysWhere<Dictionary<number>>(isGreaterThan(2))({a: 1, b: 2, c: 3, d: 4})).toEqual(['c', 'd']);
	expect(keysWhere<Dictionary<number>>(isGreaterThan(4))({a: 1, b: 2, c: 3, d: 4})).toEqual([]);
});
