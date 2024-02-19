import type {Fn, Nullish} from '../types';
import {unwrap} from '../function';

/**
 * Returns the fallback value if the value is nullish. Otherwise, returns the value.
 * @param fallback The fallback value or a function that returns the fallback value.
 * @returns The fallback value if the value is nullish.
 */
export function fallback<T, F = T>(fallback: F | Fn<F, void>): Fn<T | F, Nullish<T>> {
	return (value) => value ?? unwrap(fallback);
}
