import {expect, test} from 'bun:test';
import {map} from '../../src';

const double = (x: number) => x * 2;

test('map', () => {
	expect(map(double)([])).toEqual([]);
	expect(map(double)([1])).toEqual([2]);
	expect(map(double)([1, 2, 3])).toEqual([2, 4, 6]);
});
