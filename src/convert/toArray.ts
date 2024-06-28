import {isArray} from '../predicate/isArray';
import type {ToArray} from '../types/convert';

/**
 * Convert a value to an array if it's not already an array.
 * @param input
 */
export function toArray<T>(input: T): ToArray<T> {
	return (isArray(input) ? input : [input]) as any;
}
