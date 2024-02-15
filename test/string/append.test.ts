import {expect, test} from 'bun:test';
import {append} from '../../src';

test('append', () => {
	expect(append()('')).toEqual('');
	expect(append()('a')).toEqual('aa');
	expect(append('')('')).toEqual('');
	expect(append('')('a')).toEqual('a');
	expect(append('a')('')).toEqual('a');
	expect(append('a')('b')).toEqual('ba');
	expect(append('b')('a')).toEqual('ab');
});
