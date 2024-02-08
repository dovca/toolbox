import {reversedIterator} from './utils/iterators';

export function reverse<T>(values: ReadonlyArray<T>): T[] {
	const result: T[] = Array.from({length: values.length});
	for (const [value, index] of reversedIterator(values)) {
		result[index] = value;
	}
	return result;
}
