import type {MyGenerator} from '../types';

export function* forwardIterator<T>(values: readonly T[]): MyGenerator<T> {
	for (let i = 0; i < values.length; i++) {
		yield [values[i], i, values];
	}
}
