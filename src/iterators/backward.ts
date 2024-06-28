import type {MyGenerator} from '../types/utils';

export function* backwardIterator<T>(values: readonly T[]): MyGenerator<T> {
	for (let i = values.length - 1; i >= 0; i--) {
		yield [values[i], i, values];
	}
}
