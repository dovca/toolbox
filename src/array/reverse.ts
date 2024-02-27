import {reversedIterator} from './utils';

/**
 * Reverses a flowing array.
 * @returns Produces a new array of reversed values.
 */
export function reverse<T>(values: readonly T[]): T[] {
	const result: T[] = Array.from({length: values.length});
	for (const [value, index] of reversedIterator(values)) {
		result[index] = value;
	}
	return result;
}
