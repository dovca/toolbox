import type {Fn} from '../types';

/**
 * Returns a new array with the last value removed.
 * @param count The number of values to remove from the end of the array. Defaults to 1.
 */
export function pop<T>(count = 1): Fn<T[], ReadonlyArray<T>> {
	return (values) => values.slice(0, -count);
}
