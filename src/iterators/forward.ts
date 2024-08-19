import type {ToolboxGenerator} from '../types/utils';

export function* forwardIterator<T>(values: readonly T[]): ToolboxGenerator<T> {
	for (let i = 0; i < values.length; i++) {
		yield [values[i], i, values];
	}
}
