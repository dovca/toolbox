import {expect, test} from 'bun:test';
import {flatten} from '../../src';

test('flatten', () => {
	expect(flatten('/', '_')({a: {b: [{c: 1}]}})).toEqual({'_a/b/0/c': 1});
});
