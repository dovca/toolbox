import {expect, test} from 'bun:test';
import {arrayify} from '../../src/array';

test('arrayify non-array', () => {
	const value = {foo: 'bar'};
	const result = arrayify(value);

	expect(result).toBeArray();
	expect(result).toBeArrayOfSize(1);
	expect(result[0]).toBe(value);
});

test('arrayify array', () => {
	const value = [{foo: 'bar'}, 1];
	const result = arrayify(value);

	expect(result[0]).toBe(value[0]);
	expect(result[1]).toBe(value[1]);
	expect(result).toEqual(value);
});
