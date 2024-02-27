import type {Fn} from '../types';

/**
 * Adds a value to the beginning of the flowing array.
 * @param values The values to add to the beginning of the array.
 * @returns Produces a new array with the value added to the beginning.
 */
export function unshift<I, U = I>(...values: U[]): Fn<(I | U)[], readonly I[]> {
	return (input) => [...values, ...input];
}
