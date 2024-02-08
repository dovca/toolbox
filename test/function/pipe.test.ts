import {expect, test} from 'bun:test';
import {pipe} from '../../src/function/pipe';
import {multiply} from '../../src/number/multiply';
import {increment} from '../../src/number/increment';
import {fromCharCode, toLowerCase} from '../../src/string';
import {square} from '../../src/number/square';
import {arrayify, push, reverse} from '../../src/array';

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
