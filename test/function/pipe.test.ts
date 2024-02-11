import {expect, test} from 'bun:test';
import {pipe} from '../../src/function/pipe';
import {multiply, increment, square} from '../../src/number/arithmetic';
import {fromCharCode, toLowerCase} from '../../src/string';
import {push, reverse} from '../../src/array';
import {arrayify} from '../../src/misc/arrayify';

test('pipe 0 functions', () => {
	const piped = pipe();

	expect(piped(1)).toBe(1);
});

test('pipe 1 function', () => {
	const piped = pipe(increment);

	expect(piped(1)).toBe(2);
});

test('pipe 2 functions', () => {
	const piped = pipe(increment, multiply(2));

	expect(piped(1)).toBe(4);
});

test('pipe n functions', () => {
	const piped = pipe(increment, increment, increment, increment, increment);

	expect(piped(1)).toBe(6);
});

test('pipe functions of different argument types', () => {
	const piped = pipe(
		multiply(8),
		square,
		increment,
		fromCharCode,
		toLowerCase,
		arrayify,
		push('b'),
		reverse,
	);

	expect(piped(1)).toEqual(['b', 'a']);
});
