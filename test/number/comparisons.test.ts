import {expect, test} from 'bun:test';
import {
	isEven,
	isGreaterThan,
	isGreaterThanOrEqual, isInteger,
	isLessThan,
	isLessThanOrEqual,
	isNegative, isNonNegative, isNonPositive, isOdd,
	isPositive,
	isZero
} from '../../src';

test('isZero', () => {
	expect(isZero(0)).toBe(true);
	expect(isZero(1)).toBe(false);
});

test('isGreaterThan', () => {
	expect(isGreaterThan(0)(1)).toBe(true);
	expect(isGreaterThan(1)(0)).toBe(false);
	expect(isGreaterThan(1)(1)).toBe(false);
});

test('isGreaterThanOrEqual', () => {
	expect(isGreaterThanOrEqual(0)(1)).toBe(true);
	expect(isGreaterThanOrEqual(1)(0)).toBe(false);
	expect(isGreaterThanOrEqual(1)(1)).toBe(true);
});

test('isLessThan', () => {
	expect(isLessThan(1)(0)).toBe(true);
	expect(isLessThan(0)(1)).toBe(false);
	expect(isLessThan(1)(1)).toBe(false);
});

test('isLessThanOrEqual', () => {
	expect(isLessThanOrEqual(1)(0)).toBe(true);
	expect(isLessThanOrEqual(0)(1)).toBe(false);
	expect(isLessThanOrEqual(1)(1)).toBe(true);
});

test('isPositive', () => {
	expect(isPositive(1)).toBe(true);
	expect(isPositive(0)).toBe(false);
	expect(isPositive(-1)).toBe(false);
});

test('isNegative', () => {
	expect(isNegative(1)).toBe(false);
	expect(isNegative(0)).toBe(false);
	expect(isNegative(-1)).toBe(true);
});

test('isNonPositive', () => {
	expect(isNonPositive(1)).toBe(false);
	expect(isNonPositive(0)).toBe(true);
	expect(isNonPositive(-1)).toBe(true);
});

test('isNonNegative', () => {
	expect(isNonNegative(1)).toBe(true);
	expect(isNonNegative(0)).toBe(true);
	expect(isNonNegative(-1)).toBe(false);
});

test('isEven', () => {
	expect(isEven(2)).toBe(true);
	expect(isEven(1)).toBe(false);
});

test('isOdd', () => {
	expect(isOdd(2)).toBe(false);
	expect(isOdd(1)).toBe(true);
});

test('isInteger', () => {
	expect(isInteger(1)).toBe(true);
	expect(isInteger(1.1)).toBe(false);
});

test('isFinite', () => {
	expect(isFinite(1)).toBe(true);
	expect(isFinite(Infinity)).toBe(false);
	expect(isFinite(-Infinity)).toBe(false);
	expect(isFinite(NaN)).toBe(false);
});
