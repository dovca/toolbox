import {reversedIterator} from './utils/iterators';

/**
 * Reverses a flowing array.
 * @returns Produces a new array of reversed values.
 */
export function reverse<T>(values: ReadonlyArray<T>): T[] {
	const result: T[] = Array.from({length: values.length});
	for (const [value, index] of reversedIterator(values)) {
		result[index] = value;
	}
	return result;
}
