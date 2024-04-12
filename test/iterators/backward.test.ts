import {expect, test} from 'bun:test';
import {backwardIterator} from '../../src';

test('backwardIterator', () => {
	const values = [1, 2, 3];
	const iterator = backwardIterator(values);
	expect(iterator.next()).toEqual({done: false, value: [3, 2, values]});
	expect(iterator.next()).toEqual({done: false, value: [2, 1, values]});
	expect(iterator.next()).toEqual({done: false, value: [1, 0, values]});
	expect(iterator.next()).toEqual({done: true, value: undefined});
});
