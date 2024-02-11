import type {Fn, IterationCallback} from '../types';

export function filter<I, O extends I = I>(predicate: IterationCallback<boolean, I>): Fn<O[], ReadonlyArray<I>>;
export function filter<T>(predicate: IterationCallback<boolean, T>): Fn<T[], ReadonlyArray<T>> {
	return (values) => values.filter(predicate);
}
