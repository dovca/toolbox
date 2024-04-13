import type {Fn} from '../types';

/**
 * Appends value(s) to the flowing array.
 * @param values The values to append.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * push(3, 4, 5)([1, 2]); // [1, 2, 3, 4, 5]
 * ```
 */
export function push<I, P = I>(...values: P[]): Fn<(I | P)[], readonly I[]> {
	return (input) => [...input, ...values];
}
