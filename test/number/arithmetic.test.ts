import {expect, test} from 'bun:test';
import {
	abs,
	add,
	cbrt,
	ceil,
	decrement,
	divide,
	divideBy,
	double,
	floor,
	increment,
	max,
	min,
	modulo,
	multiply,
	negative,
	pow,
	reciprocal,
	round,
	safeAdd,
	safeDivide, safeDivideBy,
	safeMax, safeMin,
	safeMultiply,
	safeSubtract,
	safeSubtractFrom,
	sign,
	sqrt,
	square,
	subtract,
	subtractFrom,
	trunc
} from '../../src';

test('add', () => {
	expect(add(1)(2)).toBe(3);
});

test('subtract', () => {
	expect(subtract(1)(2)).toBe(1);
});

test('subtractFrom', () => {
	expect(subtractFrom(1)(2)).toBe(-1);
});

test('multiply', () => {
	expect(multiply(2)(3)).toBe(6);
	expect(multiply()(3)).toBe(9);
});

test('divideBy', () => {
	expect(divideBy(2)(1)).toBe(0.5);
});

test('divide', () => {
	expect(divide(1)(2)).toBe(0.5);
});

test('modulo', () => {
	expect(modulo(5)(7)).toBe(2);
	expect(modulo(5)(-2)).toBe(3);
});

test('max', () => {
	expect(max(1)(2)).toBe(2);
	expect(max(2)(1)).toBe(2);
});

test('min', () => {
	expect(min(1)(2)).toBe(1);
	expect(min(2)(1)).toBe(1);
});

test('pow', () => {
	expect(pow(2)(3)).toBe(9);
});

test('double', () => {
	expect(double(2)).toBe(4);
});

test('increment', () => {
	expect(increment(2)).toBe(3);
});

test('decrement', () => {
	expect(decrement(2)).toBe(1);
});

test('square', () => {
	expect(square(2)).toBe(4);
	expect(square(-2)).toBe(4);
});

test('negative', () => {
	expect(negative(2)).toBe(-2);
	expect(negative(-2)).toBe(2);
});

test('reciprocal', () => {
	expect(reciprocal(2)).toBe(0.5);
});

test('abs', () => {
	expect(abs(2)).toBe(2);
	expect(abs(-2)).toBe(2);
});

test('ceil', () => {
	expect(ceil(2.1)).toBe(3);
	expect(ceil(3)).toBe(3);
	expect(ceil(-2.1)).toBe(-2);
});

test('floor', () => {
	expect(floor(2.1)).toBe(2);
	expect(floor(3)).toBe(3);
	expect(floor(-2.1)).toBe(-3);
});

test('round', () => {
	expect(round(2.1)).toBe(2);
	expect(round(2.5)).toBe(3);
	expect(round(3)).toBe(3);
	expect(round(-2.1)).toBe(-2);
});

test('sign', () => {
	expect(sign(2)).toBe(1);
	expect(sign(-2)).toBe(-1);
	expect(sign(0)).toBe(0);
});

test('trunc', () => {
	expect(trunc(2.1)).toBe(2);
	expect(trunc(2.5)).toBe(2);
	expect(trunc(3)).toBe(3);
	expect(trunc(-2.1)).toBe(-2);
});

test('sqrt', () => {
	expect(sqrt(4)).toBe(2);
	expect(sqrt(0)).toBe(0);
	expect(sqrt(-4)).toBe(NaN);
});

test('cbrt', () => {
	expect(cbrt(8)).toBe(2);
	expect(cbrt(-8)).toBe(-2);
	expect(cbrt(0)).toBe(0);
});

test('safeAdd', () => {
	expect(safeAdd(undefined)(undefined)).toBe(NaN);
	expect(safeAdd(1)(undefined)).toBe(1);
	expect(safeAdd(undefined)(1)).toBe(1);
	expect(safeAdd(1)(3)).toBe(4);
});

test('safeSubtract', () => {
	expect(safeSubtract(undefined)(undefined)).toBe(NaN);
	expect(safeSubtract(1)(undefined)).toBe(-1);
	expect(safeSubtract(undefined)(1)).toBe(1);
	expect(safeSubtract(1)(3)).toBe(2);
});

test('safeSubtractFrom', () => {
	expect(safeSubtractFrom(undefined)(undefined)).toBe(NaN);
	expect(safeSubtractFrom(1)(undefined)).toBe(1);
	expect(safeSubtractFrom(undefined)(1)).toBe(-1);
	expect(safeSubtractFrom(1)(3)).toBe(-2);
});

test('safeMulitply', () => {
	expect(safeMultiply(undefined)(undefined)).toBe(NaN);
	expect(safeMultiply(2)(undefined)).toBe(2);
	expect(safeMultiply(undefined)(2)).toBe(2);
	expect(safeMultiply(2)(3)).toBe(6);
});

test('safeDivide', () => {
	expect(safeDivide(undefined)(undefined)).toBe(NaN);
	expect(safeDivide(2)(undefined)).toBe(2);
	expect(safeDivide(undefined)(2)).toBe(0.5);
	expect(safeDivide(6)(3)).toBe(2);
});

test('safeDivideBy', () => {
	expect(safeDivideBy(undefined)(undefined)).toBe(NaN);
	expect(safeDivideBy(2)(undefined)).toBe(0.5);
	expect(safeDivideBy(undefined)(2)).toBe(2);
	expect(safeDivideBy(2)(6)).toBe(3);
});

test('safeMax', () => {
	expect(safeMax(undefined)(undefined)).toBe(NaN);
	expect(safeMax(1)(undefined)).toBe(1);
	expect(safeMax(undefined)(1)).toBe(1);
	expect(safeMax(1)(3)).toBe(3);
});

test('safeMin', () => {
	expect(safeMin(undefined)(undefined)).toBe(NaN);
	expect(safeMin(1)(undefined)).toBe(1);
	expect(safeMin(undefined)(1)).toBe(1);
	expect(safeMin(1)(3)).toBe(1);
});


