import {expect, test} from 'bun:test';
import {shuffle} from '../../src';

test('shuffle', () => {
	const input = [1, 2, 3, 4, 5];
	const clonedInput = [...input];
	const output = shuffle(input);

	expect(input).toEqual(clonedInput);
	expect(output).not.toBe(input);
	expect(output).toHaveLength(input.length);
});
