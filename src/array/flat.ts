import type {Fn} from '../types';

/**
 * Flattens a flowing array.
 * @param depth How deep a nested array should be flattened. Defaults to 1.
 * @returns Produces a new flattened array.
 */
export function flat<T extends readonly any[], D extends number = 1>(depth: D = 1 as D): Fn<FlatArray<T, D>[], T> {
	return (values) => values.flat(depth);
}
