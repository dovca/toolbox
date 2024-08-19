import {type BinaryOperation, binaryOperation, type UnsafeBinaryOperation, unsafeBinaryOperation} from '../misc/binaryOperation';
import {
	inverseOperatorMinus,
	inverseOperatorSlash,
	operatorMinus,
	operatorPercent,
	operatorPlus,
	operatorSlash,
	operatorStar,
	safeInverseOperatorMinus,
	safeInverseOperatorSlash, safeOperator,
	safeOperatorMinus,
	safeOperatorPlus,
	safeOperatorSlash,
	safeOperatorStar
} from '../lang/operators';
import type {Fn} from '../types/utils';

/**
 * Sums the flowing value with the given value.
 * @example
 * ```typescript
 * add(1)(2); // 3 as in 2 + 1
 * ```
 */
export const add: BinaryOperation = binaryOperation(operatorPlus);

/**
 * Subtracts the given value from the flowing value.
 * @example
 * ```typescript
 * subtract(1)(2); // 1 as in 2 - 1
 * ```
 */
export const subtract: BinaryOperation = binaryOperation(operatorMinus);

/**
 * Subtracts the flowing value from the given value.
 * @example
 * ```typescript
 * subtractFrom(1)(2); // -1 as in 1 - 2
 * ```
 */
export const subtractFrom: BinaryOperation = binaryOperation(inverseOperatorMinus);

/**
 * Multiplies the flowing value by the given value.
 * @example
 * ```typescript
 * multiply(2)(3); // 6 as in 3 * 2
 * ```
 */
export const multiply: BinaryOperation = binaryOperation(operatorStar);

/**
 * Divides the flowing value by the given value.
 * @example
 * ```typescript
 * divideBy(2)(8); // 4 as in 8 / 2
 * ```
 */
export const divideBy: BinaryOperation = binaryOperation(operatorSlash);

/**
 * Divides the given value by the flowing value.
 * @example
 * ```typescript
 * divide(2)(8); // 0.25 as in 2 / 8
 * ```
 */
export const divide: BinaryOperation = binaryOperation(inverseOperatorSlash);

/**
 * Returns the remainder of the division of the flowing value by the given value.
 * @example
 * ```typescript
 * modulo(2)(5); // 1 as in 5 % 2
 * ```
 */
export const modulo: BinaryOperation = binaryOperation(operatorPercent);

/**
 * Returns the higher number of the flowing and given.
 * @example
 * ```typescript
 * max(2)(3); // 3
 * ```
 */
export const max: BinaryOperation = binaryOperation<number>(Math.max);

/**
 * Returns the lower number of the flowing and given.
 * @example
 * ```typescript
 * min(2)(3); // 2
 * ```
 */
export const min: BinaryOperation = binaryOperation(Math.min);

/**
 * Returns the result of raising the flowing value to the power of the given value.
 * @example
 * ```typescript
 * pow(2)(3); // 9 as in 3 ** 2
 * ```
 */
export const pow: BinaryOperation = binaryOperation(Math.pow);

/**
 * Sums the flowing value with the given value. If the flowing value is `null` or `undefined`, it defaults to `0`.
 * @example
 * ```typescript
 * safeAdd(1)(2); // 3 as in 2 + 1
 * safeAdd(1)(undefined); // 1 as in 0 + 1
 * ```
 */
export const safeAdd: UnsafeBinaryOperation = unsafeBinaryOperation(safeOperatorPlus);

/**
 * Subtracts the given value from the flowing value. If the flowing value is `null` or `undefined`, it defaults to `0`.
 * @example
 * ```typescript
 * safeSubtract(1)(2); // 1 as in 2 - 1
 * safeSubtract(1)(undefined); // -1 as in 0 - 1
 * ```
 */
export const safeSubtract: UnsafeBinaryOperation = unsafeBinaryOperation(safeOperatorMinus);

/**
 * Subtracts the flowing value from the given value. If the flowing value is `null` or `undefined`, it defaults to `0`.
 * @example
 * ```typescript
 * safeSubtractFrom(1)(2); // -1 as in 1 - 2
 * safeSubtractFrom(1)(undefined); // 1 as in 1 - 0
 * ```
 */
export const safeSubtractFrom: UnsafeBinaryOperation = unsafeBinaryOperation(safeInverseOperatorMinus);

/**
 * Multiplies the flowing value by the given value. If the flowing value is `null` or `undefined`, it defaults to `1`.
 * @example
 * ```typescript
 * safeMultiply(2)(3); // 6 as in 3 * 2
 * safeMultiply(2)(undefined); // 2 as in 1 * 2
 * ```
 */
export const safeMultiply: UnsafeBinaryOperation = unsafeBinaryOperation(safeOperatorStar);

/**
 * Divides the flowing value by the given value. If the flowing value is `null` or `undefined`, it defaults to `1`.
 * @example
 * ```typescript
 * safeDivideBy(2)(8); // 4 as in 8 / 2
 * safeDivideBy(2)(undefined); // 0.5 as in 1 / 2
 * ```
 */
export const safeDivideBy: UnsafeBinaryOperation = unsafeBinaryOperation(safeOperatorSlash);

/**
 * Divides the given value by the flowing value. If the flowing value is `null` or `undefined`, it defaults to `1`.
 * @example
 * ```typescript
 * safeDivide(2)(8); // 0.25 as in 2 / 8
 * safeDivide(2)(undefined); // 2 as in 2 / 1
 * ```
 */
export const safeDivide: UnsafeBinaryOperation = unsafeBinaryOperation(safeInverseOperatorSlash);

/**
 * Returns the higher number of the flowing and given. If the flowing value is `null` or `undefined`, it defaults to `-Infinity`.
 * @example
 * ```typescript
 * safeMax(2)(3); // 3
 * safeMax(2)(undefined); // 2
 * ```
 */
export const safeMax: UnsafeBinaryOperation = unsafeBinaryOperation(safeOperator(Math.max, -Infinity));

/**
 * Returns the lower number of the flowing and given. If the flowing value is `null` or `undefined`, it defaults to `Infinity`.
 * @example
 * ```typescript
 * safeMin(2)(3); // 2
 * safeMin(2)(undefined); // 2
 * ```
 */
export const safeMin: UnsafeBinaryOperation = unsafeBinaryOperation(safeOperator(Math.min, Infinity));

/**
 * Adds the parameter to itself.
 * @example
 * ```typescript
 * double(2); // 4 as in 2 + 2
 * ```
 */
export const double: Fn<number> = add();

/**
 * Adds 1 to the parameter.
 * @example
 * ```typescript
 * increment(2); // 3 as in 2 + 1
 * ```
 */
export const increment: Fn<number> = add(1);

/**
 * Subtracts 1 from the parameter.
 * @example
 * ```typescript
 * decrement(2); // 1 as in 2 - 1
 * ```
 */
export const decrement: Fn<number> = subtract(1)

/**
 * Multiplies the parameter by itself.
 * @example
 * ```typescript
 * square(2); // 4 as in 2 * 2
 * square(-2); // 4 as in -2 * (-2)
 * ```
 */
export const square: Fn<number> = multiply();

/**
 * Multiplies the parameter by -1, that is making positive values negatives and vice versa.
 * @example
 * ```typescript
 * negative(2); // -2
 * ```
 */
export const negative: Fn<number> = multiply(-1);

/**
 * Returns the reciprocal of the parameter.
 * @example
 * ```typescript
 * reciprocal(4); // 0.25 as in 1 / 4
 * ```
 */
export const reciprocal: Fn<number> = divide(1);

/**
 * Returns the parity of the parameter, that is 0 for even numbers and 1 for odd numbers.
 * @example
 * ```typescript
 * parity(2); // 0
 * parity(3); // 1
 * ```
 */
export const parity: Fn<number> = modulo(2);

/**
 * Returns the absolute value of the parameter.
 * @example
 * ```typescript
 * abs(-2); // 2
 * ```
 */
export const abs: Fn<number> = Math.abs;

/**
 * Returns the nearest integer in direction towards +Infinity.
 * @example
 * ```typescript
 * ceil(2.4); // 3
 * ceil(-2.4); // -2
 * ```
 */
export const ceil: Fn<number> = Math.ceil;

/**
 * Returns the nearest integer in direction towards -Infinity.
 * @example
 * ```typescript
 * floor(2.4); // 2
 * floor(-2.4); // -3
 * ```
 */
export const floor: Fn<number> = Math.floor;

/**
 * Returns the nearest integer.
 * @example
 * ```typescript
 * round(2.4); // 2
 * round(2.5); // 3
 * round(-2.4); // -2
 * ```
 */
export const round: Fn<number> = Math.round;

/**
 * Returns the sign of the parameter, indicating whether it is positive, negative or zero.
 * @example
 * ```typescript
 * sign(2); // 1
 * sign(-2); // -1
 * sign(0); // 0
 * ```
 */
export const sign: Fn<number> = Math.sign;

/**
 * Returns the integer part of the parameter by removing the fractional part.
 * @example
 * ```typescript
 * trunc(2.4); // 2
 * trunc(2.5); // 2
 * trunc(-2.4); // -2
 * ```
 */
export const trunc: Fn<number> = Math.trunc;

/**
 * Returns the square root of the parameter.
 * @example
 * ```typescript
 * sqrt(4); // 2
 * ```
 */
export const sqrt: Fn<number> = Math.sqrt;

/**
 * Returns the cube root of the parameter.
 * @example
 * ```typescript
 * cbrt(8); // 2
 * ```
 */
export const cbrt: Fn<number> = Math.cbrt;
