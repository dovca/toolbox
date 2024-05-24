import {expect, test} from 'bun:test';
import {increment, isLessThan, transformWhile} from '../../src';

test('transformWhile', () => {
	expect(transformWhile(isLessThan(3), increment)(0)).toBe(3);
	expect(transformWhile(isLessThan(3), increment)(10)).toBe(10);
});
