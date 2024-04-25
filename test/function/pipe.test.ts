import {expect, test} from 'bun:test';
import {toArray, fromCharCode, increment, multiply, pipe, push, square, reverse, lowerCase} from '../../src';

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
		lowerCase,
		toArray,
		push('b'),
		reverse,
	);

	expect(piped(1)).toEqual(['b', 'a']);
});
