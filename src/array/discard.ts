import {remove} from './remove';
import {isOneOf} from '../predicate';
import type {AnyArray, IsTuple, Discard} from '../types';

export type Discarder<D> = <V extends AnyArray>(input: V) => IsTuple<V> extends true
	? Discard<V, D>
	: readonly Exclude<V[number], D>[];

/**
 * Removes values of a flowing array based on value equality using SameValueZero.
 * @param values The values to remove from the array.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * discard(2, 3, 5)([1, 2, 3, 4]); // [1, 4]
 * ```
 */
export function discard<V>(...values: readonly V[]): Discarder<V> {
	return remove(isOneOf(...values)) as any;
}
