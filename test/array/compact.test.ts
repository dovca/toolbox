import {expect, test} from 'bun:test';
import {compact} from '../../src';

test('compact', () => {
	expect(compact([1, 'foo', {}, []])).toEqual([1, 'foo', {}, []]);
	expect(compact([0, false, '', undefined, null, NaN, 0n])).toEqual([]);
});
