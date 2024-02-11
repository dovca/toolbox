import {expect, test} from 'bun:test';
import {values} from '../../src';

test('values', () => {
	expect(values({})).toEqual([]);
	expect(values({a: 1})).toEqual([1]);
	expect(values({a: 1, b: 2})).toEqual([1, 2]);

	const obj = {a: 1, b: 2};
	const result = values({obj});
	expect(result).toEqual([obj]);
	expect(result[0]).toBe(obj);
});
