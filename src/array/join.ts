import type {AnyArray} from '../types/utils';
import type {Join} from '../types/array';

type Joiner<Glue extends string> = <T extends AnyArray>(values: T) => Join<T, Glue>;

/**
 * Joins the values of a flowing array into a string.
 * @param glue The separator to put between values. Defaults to an empty string.
 * @returns Produces a new string.
 * @example
 * ```typescript
 * join(', ')([1, 2, 3]); // '1, 2, 3'
 * ```
 */
export function join<Glue extends string>(glue?: Glue): Joiner<Glue> {
	  return (values) => values.join(glue ?? '') as Join<typeof values, Glue>;
}
