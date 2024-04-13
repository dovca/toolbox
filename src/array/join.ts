import type {Fn} from '../types';

/**
 * Joins the values of a flowing array into a string.
 * @param glue The separator to put between values. Defaults to an empty string.
 * @returns Produces a new string.
 * @example
 * ```typescript
 * join(', ')([1, 2, 3]); // '1, 2, 3'
 * ```
 */
export function join<T>(glue = ''): Fn<string, readonly T[]> {
	  return (values) => values.join(glue);
}
