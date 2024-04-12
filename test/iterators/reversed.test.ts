import {expect, test} from 'bun:test';
import {reversedIterator} from '../../src';

test('reversedIterator', () => {
	const values = [1, 2, 3];
	const iterator = reversedIterator(values);
	expect(iterator.next()).toEqual({done: false, value: [3, 0, values]});
	expect(iterator.next()).toEqual({done: false, value: [2, 1, values]});
	expect(iterator.next()).toEqual({done: false, value: [1, 2, values]});
	expect(iterator.next()).toEqual({done: true, value: undefined});
});
