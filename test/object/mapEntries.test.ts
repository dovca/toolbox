import {expect, test} from 'bun:test';
import {upperCase} from 'string-ts';
import {mapEntries, reverse} from '../../src';

test('mapEntries', () => {
	const obj = {foo: 'bar', baz: 'qux'} as const;

	expect(mapEntries(reverse)(obj)).toEqual({bar: 'foo', qux: 'baz'});
	expect(mapEntries((entry) => [upperCase(entry[0]), upperCase(entry[1])])(obj)).toEqual({
		FOO: 'BAR',
		BAZ: 'QUX',
	});
});
