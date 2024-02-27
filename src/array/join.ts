import type {Fn} from '../types';

/**
 * Joins the values of a flowing array into a string.
 * @param glue The separator to put between values. Defaults to an empty string.
 * @returns Produces a new string.
 */
export function join<T>(glue = ''): Fn<string, readonly T[]> {
	  return (values) => values.join(glue);
}
