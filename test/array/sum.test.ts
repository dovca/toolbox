import {expect, test} from 'bun:test';
import {sum} from '../../src/array';

test('sum', () => {
	expect(sum([])).toEqual(0);
	expect(sum([0])).toEqual(0);
	expect(sum([0, 0, 0, 0])).toEqual(0);
	expect(sum([1])).toEqual(1);
	expect(sum([1, 2, 3])).toEqual(6);
	expect(sum([1, 2, 3, 4, 5])).toEqual(15);
});
