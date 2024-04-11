import type {MyGeneratorFunction} from '../types';
import {forwardIterator} from './forward';

export function infiniteIterator<T>(generatorFn: MyGeneratorFunction<T> = forwardIterator): MyGeneratorFunction<T> {
	return function* (values) {
		while (true) {
			yield* generatorFn(values);
		}
	};
}
