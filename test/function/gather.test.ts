import {expect, test} from 'bun:test';
import {gather} from '../../src';

test('gather', () => {
	const sum = (values: number[]) => values.reduce((a, b) => a + b, 0);

	expect(gather()()).toEqual([]);
	expect(gather<number>()(1)).toEqual([1])
	expect(gather<number, number, number>()(1, 2, 3)).toEqual([1, 2, 3]);
	expect(gather<number, number, number, number>(sum)(1, 2, 3)).toEqual(6);
});
