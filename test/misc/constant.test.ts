import {expect, test} from 'bun:test';
import {constant} from '../../src';

test('constant', () => {
	const obj = {foo: 'bar'};
	const fn = constant(obj);

	expect(fn()).toBe(obj);
	expect(fn(1)).toBe(obj);
	expect(fn(1, 2)).toBe(obj);
});
