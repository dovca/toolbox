import {expect, test} from 'bun:test';
import {unwrap} from '../../src';

test('unwrap', () => {
	expect(unwrap('a')).toBe('a');
	expect(unwrap([1, 2, 3])).toEqual([1, 2, 3]);
	expect(unwrap(() => 'a')).toBe('a');
	expect(unwrap(() => [1, 2, 3])).toEqual([1, 2, 3]);
});
