import {reversedIterator} from '../iterators/reversed';
import type {AnyArray} from '../types/utils';
import type {Reverse} from '../types/array';

/**
 * Reverses the given array.
 * @returns A new array of reversed values.
 * @example
 * ```typescript
 * reverse([1, 2, 3]); // [3, 2, 1]
 * ```
 */
export function reverse<T extends AnyArray>(values: T): Reverse<T> {
	return values.toReversed() as Reverse<T>;
}
