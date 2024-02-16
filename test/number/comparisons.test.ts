import {expect, test} from 'bun:test';
import {
	isGreaterThan,
	isGreaterThanOrEqual,
	isLessThan,
	isLessThanOrEqual,
	isNegative, isNonNegative, isNonPositive,
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
