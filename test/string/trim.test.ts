import {expect, test} from 'bun:test';
import {trim, trimEnd, trimStart} from '../../src';

test('trim', () => {
	expect(trim('')).toEqual('');
	expect(trim('  ')).toEqual('');
	expect(trim('  a  ')).toEqual('a');
	expect(trim('  a  b  ')).toEqual('a  b');
});

test('trimStart', () => {
	expect(trimStart('')).toEqual('');
	expect(trimStart('  ')).toEqual('');
	expect(trimStart('  a  ')).toEqual('a  ');
	expect(trimStart('  a  b  ')).toEqual('a  b  ');
});

test('trimEnd', () => {
	expect(trimEnd('')).toEqual('');
	expect(trimEnd('  ')).toEqual('');
	expect(trimEnd('  a  ')).toEqual('  a');
	expect(trimEnd('  a  b  ')).toEqual('  a  b');
});
