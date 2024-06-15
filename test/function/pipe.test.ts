import {expect, test} from 'bun:test';
import {
	toArray,
	fromCharCode,
	increment,
	multiply,
	pipe,
	push,
	square,
	reverse,
	lowerCase,
	optionalPipe
} from '../../src';

test('pipe: 0 functions', () => {
	const piped = pipe();

	expect(piped(1)).toBe(1);
});

test('pipe: 1 function', () => {
	const piped = pipe(increment);

	expect(piped(1)).toBe(2);
});

test('pipe: n functions', () => {
	const piped = pipe(increment, increment, increment, increment, increment);

	expect(piped(1)).toBe(6);
});

test('pipe: functions of different argument types', () => {
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

test('optionalPipe: 0 functions', () => {
	const piped = optionalPipe();

	expect(piped(1)).toBe(1);
	expect(piped(undefined)).toBe(undefined);
});

test('optionalPipe: 1 function', () => {
	const piped = optionalPipe(increment);

	expect(piped(1)).toBe(2);
	expect<number | undefined>(piped(null)).toBe(undefined);
	expect<number | undefined>(piped(undefined)).toBe(undefined);
});

test('optionalPipe: n functions', () => {
	const piped = optionalPipe(increment, increment, increment, increment, increment);

	expect(piped(1)).toBe(6);
	expect<number | undefined>(piped(null)).toBe(undefined);
	expect<number | undefined>(piped(undefined)).toBe(undefined);
});

test('optionalPipe: functions of different argument types', () => {
	const piped = optionalPipe(
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
	expect<string[] | undefined>(piped(null)).toEqual(undefined);
	expect<string[] | undefined>(piped(undefined)).toEqual(undefined);
});
