import type {Fn} from '../types';

/**
 * Appends a new value to the flowing array.
 * @param values The values to append.
 * @returns Produces a new array.
 */
export function push<I, P = I>(...values: P[]): Fn<(I | P)[], ReadonlyArray<I>> {
	return (input) => [...input, ...values];
}
