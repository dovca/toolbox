import type {Indirectable} from '../types/utils';
import type {IsNullable, IsNullish} from '../types/predicate';
import {unwrap} from '../function/unwrap';

/**
 * Returns the fallback value if the value is nullish. Otherwise, returns the value.
 * @param fallback The fallback value or a function that returns the fallback value.
 * @returns The fallback value if the value is nullish.
 */
export function fallback<F>(fallback: Indirectable<F>): <T>(value: T) =>
	IsNullable<T> extends true
		? IsNullish<T> extends true
			? F
			: NonNullable<T> | F
		: T
{
	return (value) => value ?? unwrap(fallback) as any;
}
