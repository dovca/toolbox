import {expect, test} from 'bun:test';
import {MultiMap} from '../../src';

test('MultiMap', () => {
	const map = new MultiMap<[number, string], string>();

	map
		.set([1, 'a'], '1a')
		.set([1, 'b'], '1b')
		.set([2, 'a'], '2a');

	expect(map.get([1, 'a'])).toBe('1a');
	expect(map.get([1, 'b'])).toBe('1b');
	expect(map.get([2, 'a'])).toBe('2a');
	expect<string | undefined>(map.get([2, 'b'])).toBe(undefined);

	map.delete([1, 'a']);

	expect(map.has([1, 'a'])).toBe(false);
	expect(map.has([1, 'b'])).toBe(true);
	expect(map.has([1, 'c'])).toBe(false);

	map.clear();

	expect<string | undefined>(map.get([1, 'b'])).toBe(undefined);
});
