import {expect, test} from 'bun:test';
import {toArray} from '../../src';

test('toArray non-array', () => {
	const value = {foo: 'bar'};
	const result = toArray(value);

	expect(result).toBeArray();
	expect(result).toBeArrayOfSize(1);
	expect(result[0]).toBe(value);
});

test('toArray array', () => {
	const value = [{foo: 'bar'}, 1];
	const result = toArray(value);

	expect(result[0]).toBe(value[0]);
	expect(result[1]).toBe(value[1]);
	expect(result).toEqual(value);
});
