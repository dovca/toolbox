import {expect, test} from 'bun:test';
import {flatMap} from '../../src';

const expand = (x: number) => [x, x * 10, x * 100];

test('flatMap', () => {
	expect(flatMap(expand)([])).toEqual([]);
	expect(flatMap(expand)([1])).toEqual([1, 10, 100]);
	expect(flatMap(expand)([1, 2, 3])).toEqual([1, 10, 100, 2, 20, 200, 3, 30, 300]);
});
