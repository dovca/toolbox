import {isArray} from '../predicate';
import type {ToArray} from '../types';

/**
 * Convert a value to an array if it's not already an array.
 * @param input
 */
export function toArray<T>(input: T): ToArray<T> {
	return (isArray(input) ? input : [input]) as any;
}
