import type {Predicate} from '../types';

export function any<T>(...predicates: Predicate<T>[]): Predicate<T> {
	return (value) => predicates.some((predicate) => predicate(value));
}
