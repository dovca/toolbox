import {removeAll} from './remove';

/**
 * Creates an array of elements that are in the flowing array but not in the given.
 * @param values The values to remove.
 * @returns Produces a new array which is the difference of the two arrays.
 * @example
 * ```typescript
 * difference([2, 3, 4])([1, 2, 3]); // [1]
 * ```
 */
export const difference = <T>(values: readonly T[]) => removeAll(...values);
