import type {Comparator, Equalizer, Fn, Fn2, Predicate} from '../types/utils';
import {sameValueZero} from '../utils/sameValueZero';
import {negate} from '../function/negate';

/**
 * A factory for customized comparing of flowing and given values.
 * @param predicate A function that compares two values and returns a boolean.
 * @returns A function that compares the flowing value with the given value using the predicate function.
 * @example
 * ```typescript
 * comparator((a, b) => a.length === b.length)('foo')('bar'); // true
 * ```
 */
export function comparator<T>(predicate: Equalizer<T>): Fn<Predicate<T>, T>;
export function comparator<R, T>(comp: Comparator<T, R>): Fn<Fn<R, T>, T>;
export function comparator<R, T, U>(comp: Fn2<R, T, U>): Fn<Fn<R, T>, U>;
export function comparator<R, T, U = T>(comp: Fn2<R, T, U>): Fn<Fn<R, T>, U> {
	return (other) => (input) => comp(input, other);
}

/**
 * Compare two values using a mapper function.
 * @param mapper The function to transform the values with.
 * @returns A function that returns true iff both values map to the same value.
 * @example
 * ```typescript
 * equalizeWith(round)(1.8, 2.2); // true
 * ```
 */
export function equalizeWith<T, M = T>(mapper: Fn<M, T>): Equalizer<T> {
	return (input, value) => sameValueZero(mapper(input), mapper(value));
}

/**
 * Compare the flowing value with the given value using SameValueZero.
 * @param value The value to compare to.
 * @returns Produces true iff the values are equal.
 * @example
 * ```typescript
 * isEqual(1)(1); // true
 * isEqual(1)(2); // false
 * ```
 */
export const isEqual: <T>(value: T) => Predicate<T> = comparator(sameValueZero);

/**
 * Compare the flowing value with the given value using SameValueZero.
 * @param value The value to compare to.
 * @returns Produces true iff the values are not equal.
 * @example
 * ```typescript
 * isNotEqual(1)(1); // false
 * isNotEqual(1)(2); // true
 * ```
 */
export const isNotEqual: <T>(value: T) => Predicate<T> = comparator(negate(sameValueZero));
