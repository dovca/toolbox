import type {IterationCallback, Predicate} from '../types';

export function some<T>(predicate: IterationCallback<boolean, T>): Predicate<ReadonlyArray<T>> {
	return (values) => values.some(predicate);
}
