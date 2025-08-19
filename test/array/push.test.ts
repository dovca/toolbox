import {expect, test} from 'bun:test';
import {push, pushInto} from '../../src';

test('push', () => {
	expect(push(1)([])).toEqual([1]);
	expect(push(2)([1])).toEqual([1, 2]);
});

test('pushInto', () => {
	expect(pushInto([1, 2])(3, 4)).toEqual([1, 2, 3, 4]);
	expect(pushInto([])(1)).toEqual([1]);
})
