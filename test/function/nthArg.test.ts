import {expect, test} from 'bun:test';
import {nthArg, nthArgZeroIndexed} from '../../src';

test('nthArg', () => {
	expect<any>(nthArg(-1)(1, 'hello', true)).toBe(undefined);
	expect(nthArg(0)(1, 'hello', true)).toBe(undefined);
	expect(nthArg(1)(1, 'hello', true)).toBe(1);
	expect(nthArg(2)(1, 'hello', true)).toBe('hello');
	expect(nthArg(3)(1, 'hello', true)).toBe(true);
	expect(nthArg(4)(1, 'hello', true)).toBe(undefined);
});

test('nthArgZeroIndexed', () => {
	expect<any>(nthArg(-1)(1, 'hello', true)).toBe(undefined);
	expect(nthArgZeroIndexed(0)(1, 'hello', true)).toBe(1);
	expect(nthArgZeroIndexed(1)(1, 'hello', true)).toBe('hello');
	expect(nthArgZeroIndexed(2)(1, 'hello', true)).toBe(true);
	expect(nthArgZeroIndexed(3)(1, 'hello', true)).toBe(undefined);
})
