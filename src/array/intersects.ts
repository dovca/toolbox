import type {Equalizer, Fn} from '../types/utils';
import {memoize} from '../function/memoize';
import {sameValueZero} from '../utils/sameValueZero';

/** Factory that creates new intersection functions with a custom comparator. See `intersects` for a simpler version.
 * @param comparator The function that compares two elements and returns a boolean signaling if they are equal.
 * @returns Returns a custom intersection function.
 * @example
 * ```typescript
 * intersectsWith(equalizeWith(floor))([1.1, 2.2, 3.3])([3, 4, 5]); // true (3.3 and 3 are equal under `floor`)
 * ```
 */
export function intersectsWith<T>(comparator: Equalizer<T>): Fn<Fn<boolean, readonly T[]>, readonly T[]> {
	const memComparator = memoize(comparator);
	return (other) => (values) => values.some((i) => other.some((o) => memComparator(i, o)));
}

/** Produces `true` iff the flowing array has any elements in common with the given array.
 * The comparison is done using SameValueZero.
 * @param values The array to intersect with.
 * @returns Produces `true` iff the arrays have any elements in common.
 * @example
 * ```typescript
 * intersects([1, 2, 3])([2, 3, 4]); // true
 * ```
 */
export function intersects<T>(values: readonly T[]): Fn<boolean, readonly T[]> {
	return intersectsWith(sameValueZero)(values);
}
