import type {Fn, IterationCallback} from '../types';

/**
 * Maps and flattens a flowing array with depth of 1.
 * @param mapper The function to transform each value with.
 * @returns Produces a new array of mapped and flattened values.
 */
export function flatMap<I, O>(mapper: IterationCallback<O | O[], I>): Fn<O[], ReadonlyArray<I>> {
	return (values) => values.flatMap(mapper);
}
