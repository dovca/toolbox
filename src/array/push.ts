import type {Fn} from '../types/utils';

/**
 * Appends value(s) to the flowing array.
 * @param values The values to append.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * push(3, 4)([1, 2]); // [1, 2, 3, 4]
 * ```
 */
export function push<Orig, Pushed = Orig>(...values: Pushed[]): Fn<Array<Orig | Pushed>, readonly Orig[]> {
	return (array) => [...array, ...values];
}

/**
 * Appends flowing value(s) to the end of the given array.
 * @param array The array to append values to.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * pushInto([1, 2])(3, 4); // [1, 2, 3, 4]
 * ```
 */
export function pushInto<Orig>(array: Orig[]): <Pushed>(...values: Pushed[]) => Array<Orig | Pushed> {
	return (...values) => [...array, ...values];
}
