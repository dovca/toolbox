import type {Equalizer, Fn} from '../types';
import {discard} from './discard';
import {differenceWith} from './difference';

/**
 * Creates an array of unique elements from the flowing array and the given.
 * @param other The array to combine with.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * union([1, 2, 3])([3, 4, 5]); // [3, 4, 5, 1, 2]
 * ```
 */
export function union<T>(other: readonly T[]): Fn<T[], readonly T[]> {
	return (input) => input.concat(discard(...input)(other));
}

/** Factory that creates new union functions with a custom comparator.
 * @param comparator A function that compares two elements and returns a boolean signaling if they are equal.
 * @returns Returns a custom union function.
 * @example
 * ```typescript
 * unionWith(round)([1.1, 2.2, 3.3])([2, 3, 4]); // [2, 3, 4, 1.1]
 * ```
 */
export function unionWith<T>(comparator: Equalizer<T>): Fn<Fn<T[], readonly T[]>, readonly T[]> {
	return (other) => (input) => input.concat(differenceWith(comparator)(input)(other));
}
