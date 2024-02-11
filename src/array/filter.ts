import type {Fn, Predicate} from '../types';

export function filter<I, O extends I = I>(predicate: Predicate<I>): Fn<O[], ReadonlyArray<I>>;
export function filter<T>(predicate: Predicate<T>): Fn<T[], ReadonlyArray<T>> {
	return (values) => values.filter(predicate);
}
