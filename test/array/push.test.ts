import {expect, test} from 'bun:test';
import {push} from '../../src';

test('push', () => {
	expect(push(1)([])).toEqual([1]);
	expect(push(2)([1])).toEqual([1, 2]);
});
