import {expect, test} from 'bun:test';
import {equalizeWith, intersection, intersectionWith, length} from '../../src';

test('intersection', () => {
	expect(intersection([])([])).toEqual([]);
	expect(intersection([1])([])).toEqual([]);
	expect(intersection<number>([])([1])).toEqual([]);
	expect(intersection([1, 2, 3])([4, 5, 6])).toEqual([]);
	expect(intersection([1, 2, 3])([3, 4, 5])).toEqual([3]);
	expect(intersection([1, 2, 3])([3, 2, 1])).toEqual([3, 2, 1]);
});

test('intersectionWith', () => {
	const intersect = intersectionWith(equalizeWith(length<string>));

	expect(intersect([])([])).toEqual([]);
	expect(intersect(['a'])([])).toEqual([]);
	expect(intersect([])(['a'])).toEqual([]);
	expect(intersect(['a'])(['b'])).toEqual(['b']);
	expect(intersect(['a', 'aa', 'aaa'])(['dddd', 'ccc', 'bb'])).toEqual(['ccc', 'bb']);
});
