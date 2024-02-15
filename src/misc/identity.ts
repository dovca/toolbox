import type {Maybe} from '../types';

/**
 * Returns the value passed to it.
 */
export function identity(): undefined;
export function identity<T>(value: T): T;
export function identity<T>(value?: T): Maybe<T> {
	return value;
}
