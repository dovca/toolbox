import type {Fn} from '../types';

/**
 * Returns a new array with the first `count` values removed.
 * @param count
 */
export function shift<T>(count = 1): Fn<T[], ReadonlyArray<T>> {
	return (values) => values.slice(count);
}
