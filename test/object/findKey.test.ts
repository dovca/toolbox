import {expect, test} from 'bun:test';
import {findKey} from '../../src';

test('findKey', () => {
	const obj = {a: -1, b: 1};
	const isPositive = (value: number) => value > 0;

	expect(findKey<{ a: number; b: number }>(isPositive)(obj)).toBe('b');
	expect<'a' | 'b' | undefined>(findKey<{ a: number; b: number }>((value) => value === 3)(obj)).toBe(undefined);
});
