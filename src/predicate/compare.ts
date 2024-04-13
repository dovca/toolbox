import type {Comparator, Equalizer, Fn, Fn2, Predicate} from '../types';
import {sameValueZero} from '../utils';
import {negate} from '../function';

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

export const isEqual: <T>(value: T) => Predicate<T> = comparator(sameValueZero);
export const isNotEqual: <T>(value: T) => Predicate<T> = comparator(negate(sameValueZero));
