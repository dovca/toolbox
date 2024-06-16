import type {Equalizer, Fn2, Maybe} from '../types';

/**
 * Implements a safe operator that defaults to a fallback value if either operand is `null` or `undefined`.
 * @param operation The operator function.
 * @param fallback The fallback value.
 * @returns The result of the operation with its operands defaulted to the fallback value.
 */
export function safeOperator<T extends number>(operation: Fn2<T>, fallback: T): Fn2<T, Maybe<T>> {
	return (a, b) => a === undefined && b === undefined
		? NaN as T
		: operation(a ?? fallback, b ?? fallback);
}

/**
 * Implements the `<` operator.
 * @param a The first number.
 * @param b The second number.
 * @returns `true` if `a` is less than `b`.
 * @example
 * ```typescript
 * operatorLessThan(1, 2); // true
 * operatorLessThan(2, 1); // false
 * ```
 */
export const operatorLessThan: Equalizer<number> = (a, b) => a < b;

/**
 * Implements the `<=` operator.
 * @param a The first number.
 * @param b The second number.
 * @returns `true` if `a` is less than or equal to `b`.
 * @example
 * ```typescript
 * operatorLessThanOrEqual(1, 1); // true
 * operatorLessThanOrEqual(1, 2); // true
 * operatorLessThanOrEqual(2, 1); // false
 * ```
 */
export const operatorLessThanOrEqual: Equalizer<number> = (a, b) => a <= b;

/**
 * Implements the `>` operator.
 * @param a The first number.
 * @param b The second number.
 * @returns `true` if `a` is greater than `b`.
 * @example
 * ```typescript
 * operatorGreaterThan(1, 2); // false
 * operatorGreaterThan(2, 1); // true
 * ```
 */
export const operatorGreaterThan: Equalizer<number> = (a, b) => a > b;

/**
 * Implements the `>=` operator.
 * @param a The first number.
 * @param b The second number.
 * @returns `true` if `a` is greater than or equal to `b`.
 * @example
 * ```typescript
 * operatorGreaterThanOrEqual(1, 1); // true
 * operatorGreaterThanOrEqual(1, 2); // false
 * operatorGreaterThanOrEqual(2, 1); // true
 * ```
 */
export const operatorGreaterThanOrEqual: Equalizer<number> = (a, b) => a >= b;

/**
 * Implements the `===` operator.
 * @param a The first value.
 * @param b The second value.
 * @returns `true` if `a` is equal to `b`.
 * @example
 * ```typescript
 * operatorEqual(1, 1); // true
 * operatorEqual(1, 2); // false
 * ```
 */
export const operatorEqual: Equalizer<unknown> = (a, b) => a === b;

/**
 * Implements the `+` operator.
 * @param a The first number.
 * @param b The second number.
 * @returns The sum of `a` and `b`.
 * @example
 * ```typescript
 * operatorPlus(1, 2); // 3
 * ```
 */
export const operatorPlus: Fn2<number> = (a, b) => a + b;

/**
 * Implements the `-` operator.
 * @param a The first number.
 * @param b The second number.
 * @returns The difference of `a` and `b`.
 * @example
 * ```typescript
 * operatorMinus(1, 2); // -1
 * ```
 */
export const operatorMinus: Fn2<number> = (a, b) => a - b;

/**
 * Implements the `*` operator.
 * @param a The first number.
 * @param b The second number.
 * @returns The product of `a` and `b`.
 * @example
 * ```typescript
 * operatorStar(2, 3); // 6
 * ```
 */
export const operatorStar: Fn2<number> = (a, b) => a * b;

/**
 * Implements the `/` operator.
 * @param a The first number.
 * @param b The second number.
 * @returns The quotient of `a` and `b`.
 * @example
 * ```typescript
 * operatorSlash(8, 2); // 4
 * ```
 */
export const operatorSlash: Fn2<number> = (a, b) => a / b;

/**
 * Implements the `%` operator.
 * @param a The first number.
 * @param b The second number.
 * @returns The remainder of `a` divided by `b`.
 * @example
 * ```typescript
 * operatorPercent(5, 2); // 1
 * ```
 */
export const operatorPercent: Fn2<number> = (a, b) => ((a % b) + b) % b;

/**
 * Implements the `&&` operator.
 * @param a The first value.
 * @param b The second value.
 * @returns `true` if both `a` and `b` are truthy.
 * @example
 * ```typescript
 * operatorAnd(true, false); // false
 * operatorAnd(true, true); // true
 * ```
 */
export const operatorAnd: Equalizer<boolean> = (a, b) => a && b;

/**
 * Implements the `||` operator.
 * @param a The first value.
 * @param b The second value.
 * @returns `true` if either `a` or `b` are truthy.
 * @example
 * ```typescript
 * operatorOr(true, false); // true
 * operatorOr(false, false); // false
 * ```
 */
export const operatorOr: Equalizer<boolean> = (a, b) => a || b;

/**
 * Implements the `!==` operator.
 * @param a The first value.
 * @param b The second value.
 * @returns `true` if `a` is not equal to `b`.
 * @example
 * ```typescript
 * operatorXor(true, false); // true
 * operatorXor(true, true); // false
 * ```
 */
export const operatorXor: Equalizer<boolean> = (a, b) => a !== b;

/**
 * Implements the `-` operator with the operands reversed.
 * @param a The second number.
 * @param b The first number.
 * @returns The difference of `b` and `a`.
 * @example
 * ```typescript
 * inverseOperatorMinus(2, 5); // 3 as in 5 - 2
 * ```
 */
export const inverseOperatorMinus: Fn2<number> = (a, b) => b - a;

/**
 * Implements the `/` operator with the operands reversed.
 * @param a The second number.
 * @param b The first number.
 * @returns The quotient of `b` and `a`.
 * @example
 * ```typescript
 * inverseOperatorSlash(2, 8); // 4 as in 8 / 2
 * ```
 */
export const inverseOperatorSlash: Fn2<number> = (a, b) => b / a;

/**
 * Implements the `+` operator. If either operand is `null` or `undefined`, it defaults to `0`.
 * @example
 * ```typescript
 * safeOperatorPlus(1, 2); // 3
 * safeOperatorPlus(1, undefined); // 1
 * ```
 */
export const safeOperatorPlus: Fn2<number, Maybe<number>> = safeOperator(operatorPlus, 0);

/**
 * Implements the `-` operator. If either operand is `null` or `undefined`, it defaults to `0`.
 * @example
 * ```typescript
 * safeOperatorMinus(3, 2); // 1
 * safeOperatorMinus(3, undefined); // 3
 * ```
 */
export const safeOperatorMinus: Fn2<number, Maybe<number>> = safeOperator(operatorMinus, 0);

/**
 * Implements the `*` operator. If either operand is `null` or `undefined`, it defaults to `1`.
 * @example
 * ```typescript
 * safeOperatorStar(3, 2); // 6
 * safeOperatorStar(3, undefined); // 3
 * ```
 */
export const safeOperatorStar: Fn2<number, Maybe<number>> = safeOperator(operatorStar, 1);

/**
 * Implements the `/` operator. If either operand is `null` or `undefined`, it defaults to `1`.
 * @example
 * ```typescript
 * safeOperatorSlash(8, 2); // 4
 * safeOperatorSlash(8, undefined); // 8
 * ```
 */
export const safeOperatorSlash: Fn2<number, Maybe<number>> = safeOperator(operatorSlash, 1);

/**
 * Implements the `-` operator with the operands reversed. If either operand is `null` or `undefined`, it defaults to `0`.
 * @example
 * ```typescript
 * safeInverseOperatorMinus(2, 5); // 3 as in 5 - 2
 * safeInverseOperatorMinus(2, undefined); // -2 as in 0 - 2
 * ```
 */
export const safeInverseOperatorMinus: Fn2<number, Maybe<number>> = safeOperator(inverseOperatorMinus, 0);

/**
 * Implements the `/` operator with the operands reversed. If either operand is `null` or `undefined`, it defaults to `1`.
 * @example
 * ```typescript
 * safeInverseOperatorSlash(2, 8); // 4 as in 8 / 2
 * safeInverseOperatorSlash(2, undefined); // 0.5 as in 1 / 2
 * ```
 */
export const safeInverseOperatorSlash: Fn2<number, Maybe<number>> = safeOperator(inverseOperatorSlash, 1);
