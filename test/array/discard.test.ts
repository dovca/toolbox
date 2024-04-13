import {expect, test} from 'bun:test';
import {discard} from '../../src';

test('discard', () => {
	expect(discard()([])).toEqual([]);
	expect(discard(1)([])).toEqual([]);
	expect(discard<number>()([1])).toEqual([1]);
	expect(discard(1)([1])).toEqual([]);
	expect(discard(1)([1, 2, 3])).toEqual([2, 3]);
	expect(discard(2, 3, 4)([1, 2, 3])).toEqual([1]);
});
