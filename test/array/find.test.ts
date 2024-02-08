import {expect, test} from 'bun:test';
import {find, findLast} from '../../src/array';

const positive = (x: number) => x > 0;

test('find', () => {
	expect<number | undefined>(find(positive)([])).toBe(undefined);
	expect<number | undefined>(find(positive)([0])).toBe(undefined);
	expect<number | undefined>(find(positive)([1])).toBe(1);
	expect<number | undefined>(find(positive)([0, 0, 0, 1, 2, 0, 0])).toBe(1);
	expect<number | undefined>(find<number>((x, i) => x > i)([0, 1, 2, 4, 3, 7])).toBe(4);
});

test('findLast', () => {
	expect<number | undefined>(findLast(positive)([])).toBe(undefined);
	expect<number | undefined>(findLast(positive)([0])).toBe(undefined);
	expect<number | undefined>(findLast(positive)([1])).toBe(1);
	expect<number | undefined>(findLast(positive)([0, 0, 0, 1, 2, 0, 0])).toBe(2);
	expect<number | undefined>(findLast<number>((x, i) => x > i)([0, 1, 2, 4, 3, 7])).toBe(7);
})
