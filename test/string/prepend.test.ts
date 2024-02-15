import {expect, test} from 'bun:test';
import {prepend} from '../../src';

test('prepend', () => {
	expect(prepend()('')).toEqual('');
	expect(prepend()('a')).toEqual('aa');
	expect(prepend('')('')).toEqual('');
	expect(prepend('')('a')).toEqual('a');
	expect(prepend('a')('')).toEqual('a');
	expect(prepend('a')('b')).toEqual('ab');
	expect(prepend('b')('a')).toEqual('ba');
});
