import type {Fn, IterationCallback} from '../types/utils';

/**
 * Maps and flattens a flowing array with depth of 1.
 * @param mapper The function to transform each value with.
 * @returns Produces a new array of mapped and flattened values.
 * @example
 * ```typescript
 * flatMap((v) => [v, v + 10])([1, 2, 3]); // [1, 11, 2, 12, 3, 13]
 * ```
 */
export function flatMap<I, O>(mapper: IterationCallback<O | O[], I>): Fn<O[], readonly I[]> {
	return (values) => values.flatMap(mapper);
}
