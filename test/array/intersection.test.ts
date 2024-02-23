import {expect, test} from 'bun:test';
import {intersection, intersectionWith} from '../../src/array/intersection';

test('intersection', () => {
	expect(intersection([])([])).toEqual([]);
	expect(intersection([1, 2, 3])([4, 5, 6])).toEqual([]);
	expect(intersection([1, 2, 3])([3, 4, 5])).toEqual([3]);
});

test('intersectionWith', () => {
	const equalLength = (a: string, b: string) => a.length === b.length
	expect(intersectionWith(equalLength)([])([])).toEqual([]);
	expect(intersectionWith(equalLength)(['a', 'aa', 'aaa'])(['dddd', 'ccc', 'bb'])).toEqual(['ccc', 'bb']);
});
