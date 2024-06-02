import {expect, test} from 'bun:test';
import {
	inverseOperatorMinus,
	inverseOperatorSlash, operatorAnd,
	operatorEqual,
	operatorGreaterThan,
	operatorGreaterThanOrEqual,
	operatorLessThan,
	operatorLessThanOrEqual,
	operatorMinus, operatorOr,
	operatorPlus,
	operatorSlash,
	operatorStar, operatorXor,
	safeInverseOperatorMinus,
	safeInverseOperatorSlash,
	safeOperatorMinus,
	safeOperatorPlus,
	safeOperatorSlash,
	safeOperatorStar
} from '../../src';

test('operatorLessThan', () => {
	expect(operatorLessThan(2, 2)).toBe(false);
	expect(operatorLessThan(2, 3)).toBe(true);
	expect(operatorLessThan(3, 2)).toBe(false);
});

test('operatorLessThanOrEqual', () => {
	expect(operatorLessThanOrEqual(2, 2)).toBe(true);
	expect(operatorLessThanOrEqual(2, 3)).toBe(true);
	expect(operatorLessThanOrEqual(3, 2)).toBe(false);
});

test('operatorGreaterThan', () => {
	expect(operatorGreaterThan(2, 2)).toBe(false);
	expect(operatorGreaterThan(2, 3)).toBe(false);
	expect(operatorGreaterThan(3, 2)).toBe(true);
});

test('operatorGreaterThanOrEqual', () => {
	expect(operatorGreaterThanOrEqual(2, 2)).toBe(true);
	expect(operatorGreaterThanOrEqual(2, 3)).toBe(false);
	expect(operatorGreaterThanOrEqual(3, 2)).toBe(true);
});

test('operatorEqual', () => {
	expect(operatorEqual(2, 2)).toBe(true);
	expect(operatorEqual(2, 3)).toBe(false);
});

test('operatorPlus', () => {
	expect(operatorPlus(2, 3)).toBe(5);
});

test('operatorMinus', () => {
	expect(operatorMinus(2, 3)).toBe(-1);
});

test('operatorStar', () => {
	expect(operatorStar(2, 3)).toBe(6);
});

test('operatorSlash', () => {
	expect(operatorSlash(2, 3)).toBe(0.6666666666666666);
});

test('operatorAnd', () => {
	expect(operatorAnd(true, true)).toBe(true);
	expect(operatorAnd(true, false)).toBe(false);
	expect(operatorAnd(false, false)).toBe(false);
});

test('operatorOr', () => {
	expect(operatorOr(true, true)).toBe(true);
	expect(operatorOr(true, false)).toBe(true);
	expect(operatorOr(false, false)).toBe(false);
});

test('operatorXor', () => {
	expect(operatorXor(true, true)).toBe(false);
	expect(operatorXor(true, false)).toBe(true);
	expect(operatorXor(false, true)).toBe(true);
});

test('inverseOperatorMinus', () => {
	expect(inverseOperatorMinus(2, 3)).toBe(1);
});

test('inverseOperatorSlash', () => {
	expect(inverseOperatorSlash(2, 3)).toBe(1.5);
});

test('safeOperatorPlus', () => {
	expect(safeOperatorPlus(2, 3)).toBe(5);
	expect(safeOperatorPlus(2, undefined)).toBe(2);
	expect(safeOperatorPlus(undefined, 3)).toBe(3);
	expect(safeOperatorPlus(undefined, undefined)).toBe(NaN);
});

test('safeOperatorMinus', () => {
	expect(safeOperatorMinus(2, 3)).toBe(-1);
	expect(safeOperatorMinus(2, undefined)).toBe(2);
	expect(safeOperatorMinus(undefined, 3)).toBe(-3);
	expect(safeOperatorMinus(undefined, undefined)).toBe(NaN);
});

test('safeInverseOperatorMinus', () => {
	expect(safeInverseOperatorMinus(2, 3)).toBe(1);
	expect(safeInverseOperatorMinus(2, undefined)).toBe(-2);
	expect(safeInverseOperatorMinus(undefined, 3)).toBe(3);
	expect(safeInverseOperatorMinus(undefined, undefined)).toBe(NaN);
});

test('safeOperatorStar', () => {
	expect(safeOperatorStar(2, 3)).toBe(6);
	expect(safeOperatorStar(2, undefined)).toBe(2);
	expect(safeOperatorStar(undefined, 3)).toBe(3);
	expect(safeOperatorStar(undefined, undefined)).toBe(NaN);
});

test('safeOperatorSlash', () => {
	expect(safeOperatorSlash(2, 3)).toBe(0.6666666666666666);
	expect(safeOperatorSlash(2, undefined)).toBe(2);
	expect(safeOperatorSlash(undefined, 3)).toBe(0.3333333333333333);
	expect(safeOperatorSlash(undefined, undefined)).toBe(NaN);
});

test('safeInverseOperatorSlash', () => {
	expect(safeInverseOperatorSlash(2, 3)).toBe(1.5);
	expect(safeInverseOperatorSlash(2, undefined)).toBe(0.5);
	expect(safeInverseOperatorSlash(undefined, 3)).toBe(3);
	expect(safeInverseOperatorSlash(undefined, undefined)).toBe(NaN);
});
