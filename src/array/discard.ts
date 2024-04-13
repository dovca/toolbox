import type {Fn} from '../types';
import {remove} from './remove';
import {isOneOf} from '../predicate';

/**
 * Removes values of a flowing array based on value equality using SameValueZero.
 * @param values The values to remove from the array.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * discard(2, 3, 5)([1, 2, 3, 4]); // [1, 4]
 * ```
 */
export function discard<T>(...values: readonly T[]): Fn<T[], readonly T[]> {
	return remove(isOneOf(...values));
}
