import {reversedIterator} from './utils';
import type {Reverse} from '../types';

/**
 * Reverses a flowing array.
 * @returns Produces a new array of reversed values.
 */
export function reverse<T extends readonly any[]>(values: T): Reverse<T> {
	const result = Array.from({length: values.length});
	for (const [value, index] of reversedIterator(values)) {
		result[index] = value;
	}
	return result as Reverse<T>;
}
