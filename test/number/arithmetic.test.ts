import {expect, test} from 'bun:test';
import {
	abs,
	add, cbrt, ceil, decrement,
	divide,
	divideBy,
	double, floor,
	increment,
	max,
	min,
	modulo,
	multiply, negative,
	pow, reciprocal, round, sign, sqrt, square,
	subtract,
	subtractFrom, trunc
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
