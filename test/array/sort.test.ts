import {expect, test} from 'bun:test';
import {ascending, descending, identity, length, sort} from '../../src';

test('sort: default', () => {
	expect(sort()([])).toEqual([]);
	expect(sort()([3, 10, 2, 1])).toEqual([1, 2, 3, 10]);
	expect(sort()(['d', 'c', 'b', 'a'])).toEqual(['a', 'b', 'c', 'd']);
})

test('sort: custom', () => {
	expect(sort(() => -1)([])).toEqual([]);
	expect(sort<number>((a, b) => a - b)([3, 10, 2, 1])).toEqual([1, 2, 3, 10]);
	expect(sort<string>((a, b) => a.localeCompare(b))(['d', 'c', 'b', 'a'])).toEqual(['a', 'b', 'c', 'd']);
	expect(sort<string>((a, b) => a.localeCompare(b))(['aaaaa', 'bb', 'c', 'ddd'])).toEqual(['aaaaa', 'bb', 'c', 'ddd']);
	expect(sort<string>((a, b) => a.length - b.length)(['aaaaa', 'bb', 'c', 'ddd'])).toEqual(['c', 'bb', 'ddd', 'aaaaa']);
});

test('sort: ascending', () => {
	expect(sort(ascending(identity))([])).toEqual([]);
	expect(sort(ascending())([3, 10, 2, 1])).toEqual([1, 2, 3, 10]);
	expect(sort<string>(ascending())(['aaaaa', 'bb', 'c', 'ddd'])).toEqual(['aaaaa', 'bb', 'c', 'ddd']);
	expect(sort(ascending(identity<number>))([3, 10, 2, 1])).toEqual([1, 2, 3, 10]);
	expect(sort(ascending(identity<string>))(['d', 'c', 'b', 'a'])).toEqual(['a', 'b', 'c', 'd']);
	expect(sort(ascending(length))(['aaaaa', 'bb', 'c', 'ddd'])).toEqual(['c', 'bb', 'ddd', 'aaaaa']);
});

test('sort: descending', () => {
	expect(sort(descending(identity))([])).toEqual([]);
	expect(sort(descending())([3, 10, 2, 1])).toEqual([10, 3, 2, 1]);
	expect(sort<string>(descending())(['aaaaa', 'bb', 'c', 'ddd'])).toEqual(['ddd', 'c', 'bb', 'aaaaa']);
	expect(sort(descending(identity<number>))([3, 10, 2, 1])).toEqual([10, 3, 2, 1]);
	expect(sort(descending(identity<string>))(['a', 'b', 'c', 'd'])).toEqual(['d', 'c', 'b', 'a']);
	expect(sort(descending(length))(['aaaaa', 'bb', 'c', 'ddd'])).toEqual(['aaaaa', 'ddd', 'bb', 'c']);
});
