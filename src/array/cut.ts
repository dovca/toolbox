import type {First, Fn, WithoutFirst} from '../types';

/**
 * Splits an array into two arrays at a specific position.
 * @param position The position to split the array at.
 * @returns A couple of arrays that made up the original arrays.
 */
export function cut<T>(position: number): Fn<[T[], T[]], ReadonlyArray<T>> {
	return (values) => [values.slice(0, position), values.slice(position)];
}
