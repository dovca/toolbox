import {expect, test} from 'bun:test';
import {pop} from '../../src';

test('pop', () => {
	expect(pop()([])).toEqual([]);
	expect(pop()([1])).toEqual([]);
	expect(pop()([1, 2, 3])).toEqual([1, 2]);
	expect(pop(2)([1, 2, 3, 4])).toEqual([1, 2]);
	expect(pop(5)([1, 2, 3, 4])).toEqual([]);
});
