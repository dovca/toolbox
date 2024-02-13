import {expect, test} from 'bun:test';
import {identity} from '../../src';

test('identity', () => {
	const obj = {};
	expect(identity()).toBe(undefined);
	expect(identity(1)).toBe(1);
	expect(identity(obj)).toBe(obj);
});
