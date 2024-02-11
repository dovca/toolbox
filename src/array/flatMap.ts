import type {Fn, IterationCallback} from '../types';

export function flatMap<I, O>(mapper: IterationCallback<O | O[], I>): Fn<O[], ReadonlyArray<I>> {
	return (values) => values.flatMap(mapper);
}
