import type {AnyArray, Fn} from '../types/utils';

/**
 * Flattens a flowing array.
 * @param depth How deep a nested array should be flattened. Defaults to 1.
 * @returns Produces a new flattened array.
 * @example
 * ```typescript
 * flat()([[1, 2], [3, 4]]); // [1, 2, 3, 4]
 * ```
 */
export function flat<T extends AnyArray, D extends number = 1>(depth: D = 1 as D): Fn<FlatArray<T, D>[], T> {
	return (values) => values.flat(depth);
}
