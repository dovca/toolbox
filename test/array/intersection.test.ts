import {expect, test} from 'bun:test';
import {intersection, intersectionBy, intersectionWith} from '../../src';

test('intersection', () => {
	expect(intersection([])([])).toEqual([]);
	expect(intersection([1])([])).toEqual([]);
	expect(intersection<number>([])([1])).toEqual([]);
	expect(intersection([1, 2, 3])([4, 5, 6])).toEqual([]);
	expect(intersection([1, 2, 3])([3, 4, 5])).toEqual([3]);
	expect(intersection([1, 2, 3])([3, 2, 1])).toEqual([3, 2, 1]);
});

test('intersectionWith', () => {
	const equalLength = (a: string, b: string) => a.length === b.length
	const intersect = intersectionWith(equalLength);

	expect(intersect([])([])).toEqual([]);
	expect(intersect(['a'])([])).toEqual([]);
	expect(intersect([])(['a'])).toEqual([]);
	expect(intersect(['a'])(['b'])).toEqual(['b']);
	expect(intersect(['a', 'aa', 'aaa'])(['dddd', 'ccc', 'bb'])).toEqual(['ccc', 'bb']);
});

test('intersectionBy', () => {
	const firstChar = (s: string) => s.charAt(0);
	const intersect = intersectionBy(firstChar);

	expect(intersect([])([])).toEqual([]);
	expect(intersect(['a'])([])).toEqual([]);
	expect(intersect([])(['a'])).toEqual([]);
	expect(intersect(['a'])(['b'])).toEqual([]);
	expect(intersect(['a', 'aa', 'aaa'])(['dddd', 'ccc', 'bb'])).toEqual([]);
	expect(intersect(['a', 'dd', 'eee'])(['ccc', 'bb', 'a', 'aa'])).toEqual(['a', 'aa']);
});
