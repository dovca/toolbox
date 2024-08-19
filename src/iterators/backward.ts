import type {ToolboxGenerator} from '../types/utils';

export function* backwardIterator<T>(values: readonly T[]): ToolboxGenerator<T> {
	for (let i = values.length - 1; i >= 0; i--) {
		yield [values[i], i, values];
	}
}
