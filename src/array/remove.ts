import type {Fn, IterationCallback} from '../types/utils';

/**
 * Removes values of a flowing array based on a predicate.
 * @param predicate The predicate to remove the values with.
 * @returns Produces a new array without values that pass the predicate.
 */
export function remove<T>(predicate: IterationCallback<boolean, T>): Fn<T[], readonly T[]> {
	return (values) => values.filter((value, index, array) => !predicate(value, index, array));
}
