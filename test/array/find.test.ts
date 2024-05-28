import {expect, test} from 'bun:test';
import {find, findLast, findReversed, isPositive} from '../../src';

test('find', () => {
	expect<number | undefined>(find(isPositive)([])).toBe(undefined);
	expect<number | undefined>(find(isPositive)([0])).toBe(undefined);
	expect<number | undefined>(find(isPositive)([1])).toBe(1);
	expect<number | undefined>(find(isPositive)([0, 0, 0, 1, 2, 0, 0])).toBe(1);
	expect<number | undefined>(find<number>((x, i) => x > i)([0, 1, 2, 4, 3, 7])).toBe(4);
});

test('findLast', () => {
	expect<number | undefined>(findLast(isPositive)([])).toBe(undefined);
	expect<number | undefined>(findLast(isPositive)([0])).toBe(undefined);
	expect<number | undefined>(findLast(isPositive)([1])).toBe(1);
	expect<number | undefined>(findLast(isPositive)([0, 0, 0, 1, 2, 0, 0])).toBe(2);
	expect<number | undefined>(findLast<number>((x, i) => x > i)([0, 1, 2, 4, 3, 7])).toBe(7);
})

test('findReversed', () => {
	expect<number | undefined>(findReversed(isPositive)([])).toBe(undefined);
	expect<number | undefined>(findReversed(isPositive)([0])).toBe(undefined);
	expect<number | undefined>(findReversed(isPositive)([1])).toBe(1);
	expect<number | undefined>(findReversed(isPositive)([0, 0, 0, 1, 2, 0, 0])).toBe(2);
	expect<number | undefined>(findReversed<number>((x, i) => x < i)([0, 1, 2, 4, 3, 7])).toBe(2);
})
