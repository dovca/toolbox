import {expect, test} from 'bun:test';
import {toRegex} from '../../src';

test('toRegex', () => {
	expect(toRegex()('a')).toEqual(/a/);
	expect(toRegex('g')('a')).toEqual(/a/g);
	expect(toRegex()('a')).not.toEqual(/a/g);
});
