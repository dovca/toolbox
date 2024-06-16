import {comparator, isEqual} from '../predicate';
import {negate} from '../function';
import {parity} from './arithmetic';
import {operatorGreaterThan, operatorGreaterThanOrEqual, operatorLessThan, operatorLessThanOrEqual} from '../lang';
import type {Fn, Predicate} from '../types';

/**
 * Returns true if the parameter is the number `0`.
 * @example
 * ```typescript
 * isZero(0); // true
 * isZero(1); // false
 * ```
 */
export const isZero: Predicate<number> = isEqual(0);

/**
 * Produces `true` if the flowing value is greater than the given value.
 * @example
 * ```typescript
 * isGreaterThan(1)(2); // true
 * isGreaterThan(2)(1); // false
 * ```
 */
export const isGreaterThan: Fn<Predicate<number>, number> = comparator(operatorGreaterThan);

/**
 * Produces `true` if the flowing value is greater than or equal to the given value.
 * @example
 * ```typescript
 * isGreaterThanOrEqual(1)(1); // true
 * isGreaterThanOrEqual(1)(2); // true
 * isGreaterThanOrEqual(2)(1); // false
 * ```
 */
export const isGreaterThanOrEqual: Fn<Predicate<number>, number> = comparator(operatorGreaterThanOrEqual);

/**
 * Produces `true` if the flowing value is less than the given value.
 * @example
 * ```typescript
 * isLessThan(1)(2); // true
 * isLessThan(2)(1); // false
 * ```
 */
export const isLessThan: Fn<Predicate<number>, number> = comparator(operatorLessThan);

/**
 * Produces `true` if the flowing value is less than or equal to the given value.
 * @example
 * ```typescript
 * isLessThanOrEqual(1)(1); // true
 * isLessThanOrEqual(1)(2); // true
 * isLessThanOrEqual(2)(1); // false
 * ```
 */
export const isLessThanOrEqual: Fn<Predicate<number>, number> = comparator(operatorLessThanOrEqual);

/**
 * Returns `true` if the parameter is a positive number greater than 0.
 * @example
 * ```typescript
 * isPositive(1); // true
 * isPositive(-1); // false
 * ```
 */
export const isPositive: Predicate<number> = isGreaterThan(0);

/**
 * Returns `true` if the parameter is a negative number less than 0.
 * @example
 * ```typescript
 * isNegative(-1); // true
 * isNegative(1); // false
 * ```
 */
export const isNegative: Predicate<number> = isLessThan(0);

/**
 * Returns `true` if the parameter is a non-positive number less than or equal to 0.
 * @example
 * ```typescript
 * isNonPositive(0); // true
 * isNonPositive(1); // false
 * ```
 */
export const isNonPositive: Predicate<number> = isLessThanOrEqual(0);

/**
 * Returns `true` if the parameter is a non-negative number greater than or equal to 0.
 * @example
 * ```typescript
 * isNonNegative(0); // true
 * isNonNegative(-1); // false
 * ```
 */
export const isNonNegative: Predicate<number> = isGreaterThanOrEqual(0);

/**
 * Returns `true` if the parameter is an odd number.
 * @example
 * ```typescript
 * isOdd(1); // true
 * isOdd(2); // false
 * ```
 */
export const isOdd: Predicate<number> = (value: number) => parity(value) === 1;

/**
 * Returns `true` if the parameter is an even number.
 * @example
 * ```typescript
 * isEven(1); // false
 * isEven(2); // true
 * ```
 */
export const isEven: Predicate<number> = negate(isOdd);

/**
 * Returns `true` if the parameter is an integer.
 * @example
 * ```typescript
 * isInteger(1); // true
 * isInteger(1.1); // false
 * ```
 */
export const isInteger: Predicate<number> = Number.isInteger;

/**
 * Returns `true` if the parameter is a finite number.
 * @example
 * ```typescript
 * isFinite(1); // true
 * isFinite(Infinity); // false
 * ```
 */
export const isFinite: Predicate<number> = Number.isFinite;
