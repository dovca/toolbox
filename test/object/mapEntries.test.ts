import {expect, test} from 'bun:test';
import {upperCase} from 'string-ts';
import {mapEntries, reverse, type Transpose} from '../../src';

type Obj = {foo: string; baz: string};

test('mapEntries', () => {
	const obj = {foo: 'bar', baz: 'qux'};

	expect(mapEntries<Obj, Transpose<Obj>>(reverse)(obj)).toEqual({bar: 'foo', qux: 'baz'});
	expect(
		mapEntries<Obj, {FOO: string; BAZ: string;}>(
			([key, value]) => [upperCase(key), upperCase(value)]
		)(obj)
	).toEqual({
		FOO: 'BAR',
		BAZ: 'QUX',
	});
});
