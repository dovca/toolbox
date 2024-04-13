import type {Equalizer, Fn} from '../types';
import {memoize} from '../function';
import {discard} from './discard';
import {remove} from './remove';

/**
 * Creates an array of elements that are in the flowing array but not in the given.
 * @param values The values to remove.
 * @returns Produces a new array which is the difference of the two arrays.
 * @example
 * ```typescript
 * difference([2, 3, 4])([1, 2, 3]); // [1]
 * ```
 */
export function difference<T>(values: readonly T[]): Fn<T[], readonly T[]> {
	return discard(...values);
}

/** Factory that creates new difference functions with a custom comparator.
 * @param comparator A function that compares two elements and returns a boolean signaling if they are equal.
 * @returns Returns a custom difference function.
 * @example
 * ```typescript
 * differenceWith(round)([1.1, 2.2, 3.3])([2, 3, 4]); // [4]
 * ```
 */
export function differenceWith<T>(comparator: Equalizer<T>): Fn<Fn<T[], readonly T[]>, readonly T[]> {
	const memComparator = memoize(comparator);
	return (other) => remove((i) => other.some((o) => memComparator(i, o)));
}
