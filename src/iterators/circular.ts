import type {MyGeneratorFunction} from '../types';
import {modulo} from '../number';

export function circularIterator<T>(startIndex = 0): MyGeneratorFunction<T> {
	return function* (values) {
		const mod = modulo(values.length);

		for (let i = 0; i < values.length; i++) {
			const index = mod(startIndex + i);
			yield [values[index], index, values];
		}
	};
}
