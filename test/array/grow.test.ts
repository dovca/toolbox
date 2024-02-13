import {expect, test} from 'bun:test';
import {grow} from '../../src';

test('grow', () => {
	expect(grow()([])).toEqual([]);
	expect(grow()([1])).toEqual([1, 1]);
	expect(grow()([1, 2])).toEqual([1, 2, 2]);
	expect(grow(() => 10)([1, 2, 3])).toEqual([1, 2, 3, 10]);
	expect(grow((x: number) => x + 1)([1, 2, 3])).toEqual([1, 2, 3, 4]);
});
