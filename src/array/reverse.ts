import {reversedIterator} from '../iterators';
import type {AnyArray, Reverse} from '../types';

/**
 * Reverses the given array.
 * @returns A new array of reversed values.
 * @example
 * ```typescript
 * reverse([1, 2, 3]); // [3, 2, 1]
 * ```
 */
export function reverse<T extends AnyArray>(values: T): Reverse<T> {
	const result = Array.from({length: values.length});
	for (const [value, index] of reversedIterator(values)) {
		result[index] = value;
	}
	return result as Reverse<T>;
}
