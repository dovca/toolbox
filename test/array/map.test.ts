import {expect, test} from 'bun:test';
import {double, map, mapWithPrevInput, mapWithPrevOutput} from '../../src';

test('map', () => {
	expect(map(double)([])).toEqual([]);
	expect(map(double)([1])).toEqual([2]);
	expect(map(double)([1, 2, 3])).toEqual([2, 4, 6]);
});

test('mapWithPrevInput', () => {
	expect(mapWithPrevInput<number>(([current, prev]) => current * (prev ?? 1))([1, 2, 3, 4, 5])).toEqual([1, 2, 6, 12, 20]);
});

test('mapWithPrevOutput', () => {
	expect(mapWithPrevOutput<number>(([current, prev]) => current * (prev ?? 1))([1, 2, 3, 4, 5])).toEqual([1, 2, 6, 24, 120]);
});
