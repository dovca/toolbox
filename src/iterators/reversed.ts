import type {ToolboxGenerator} from '../types/utils';

export function* reversedIterator<T>(values: readonly T[]): ToolboxGenerator<T> {
	for (let i = values.length - 1, j = 0; i >= 0; i--, j++) {
		yield [values[i], j, values];
	}
}
