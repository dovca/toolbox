import type {Fn} from '../types/utils';

/**
 * Adds given value(s) to the beginning of the flowing array.
 * @param values The values to add to the beginning of the array.
 * @returns Produces a new array with the value added to the beginning.
 * @example
 * ```typescript
 * unshift(1, 2)([3, 4]); // [1, 2, 3, 4]
 * ```
 */
export function unshift<Orig, Unshifted = Orig>(...values: Unshifted[]): Fn<Array<Orig | Unshifted>, readonly Orig[]> {
	return (array) => [...values, ...array];
}

/**
 * Adds flowing value(s) to the beginning of the given array.
 * @param array The array to add values to.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * unshiftInto([3, 4])(1, 2); // [1, 2, 3, 4]
 * ```
 */
export function unshiftInto<Orig>(array: Orig[]): <Unshifted>(...values: Unshifted[]) => Array<Orig | Unshifted> {
	return (...values) => [...values, ...array];
}
