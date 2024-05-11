import {expect, test} from 'bun:test';
import {join} from '../../src';

test('join', () => {
	expect(join()([])).toBe('');
	expect(join(',')([])).toBe('');
	expect(join()([1])).toBe('1');
	expect(join(',')([1])).toBe('1');
	expect(join()([1, 2, 3])).toBe('123');
	expect(join(',')([1, 2, 3])).toBe('1,2,3');
	expect(join(' ')([1, 2, [[3, 4]]])).toBe('1 2 3,4');
	expect(join()([undefined])).toBe('');
});
