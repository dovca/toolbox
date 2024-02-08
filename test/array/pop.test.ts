import {expect, test} from 'bun:test';
import {pop} from '../../src/array';

test('pop', () => {
	expect(pop([])).toEqual([]);
	expect(pop([1])).toEqual([]);
	expect(pop([1, 2, 3])).toEqual([1, 2]);
});
