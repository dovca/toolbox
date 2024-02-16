import {expect, test} from 'bun:test';
import {fill} from '../../src';

test('fill', () => {
	expect(fill(0)([1, 2, 3])).toEqual([0, 0, 0]);
	expect(fill(0, 1)([1, 2, 3])).toEqual([1, 0, 0]);
	expect(fill(0, 1, 2)([1, 2, 3])).toEqual([1, 0, 3]);
});
