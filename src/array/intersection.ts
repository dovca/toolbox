import type {Equalizer, Fn} from '../types';
import {memoize} from '../function';
import {filter} from './filter';
import {keep} from './keep';

/** Creates a new array with elements that are present in both the flowing and given arrays.
 * The comparison is done using SameValueZero.
 * @param values Array of elements to intersect with.
 * @returns Produces a new array with elements that are present in both arrays.
 * @example
 * ```typescript
 * intersection([1, 2, 3])([2, 3, 4]); // [2, 3]
 * ```
 */
export function intersection<T>(values: readonly T[]): Fn<T[], readonly T[]> {
	return keep(...values);
}

/** Factory that creates new intersection functions with a custom comparator.
 * @param comparator A function that compares two elements and returns a boolean signaling if they are equal.
 * @returns Returns a custom intersection function.
 * @example
 * ```typescript
 * intersectionWith(round)([1.1, 2.2, 3.3])([2, 3, 4]); // [2, 3]
 * ```
 */
export function intersectionWith<T>(comparator: Equalizer<T>): Fn<Fn<T[], readonly T[]>, readonly T[]> {
	const memComparator = memoize(comparator);
	return (other) => filter((i) => other.some((o) => memComparator(i, o)));
}
