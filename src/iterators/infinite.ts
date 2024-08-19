import type {ToolboxGeneratorFunction} from '../types/utils';
import {forwardIterator} from './forward';

export function infiniteIterator<T>(generatorFn: ToolboxGeneratorFunction<T> = forwardIterator): ToolboxGeneratorFunction<T> {
	return function* (values) {
		while (true) {
			yield* generatorFn(values);
		}
	};
}
