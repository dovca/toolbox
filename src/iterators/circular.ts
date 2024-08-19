import type {ToolboxGeneratorFunction} from '../types/utils';
import {modulo} from '../number/arithmetic';

export function circularIterator<T>(startIndex = 0): ToolboxGeneratorFunction<T> {
	return function* (values) {
		const mod = modulo(values.length);

		for (let i = 0; i < values.length; i++) {
			const index = mod(startIndex + i);
			yield [values[index], index, values];
		}
	};
}
