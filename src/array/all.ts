import type {Predicate} from '../types';

export function all<T>(...predicates: Predicate<T>[]): Predicate<T> {
	return (value) => predicates.every((predicate) => predicate(value));
}
