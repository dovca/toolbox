import {remove} from './remove';
import {isOneOf} from '../predicate';
import type {Fn} from '../types';

/**
 * Removes values of a flowing array based on value equality using SameValueZero.
 * @param values The values to remove from the array.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * discard(2, 3, 5)([1, 2, 3, 4]); // [1, 4]
 * ```
 */
export function discard<V>(...values: readonly V[]): Fn<V[], readonly V[]>;
export function discard<V, D extends V = V>(...values: readonly D[]): Fn<Exclude<V, D>[], readonly V[]>;
export function discard<V>(...values: readonly V[]): Fn<V[], readonly V[]> {
	return remove(isOneOf(...values)) as any;
}
