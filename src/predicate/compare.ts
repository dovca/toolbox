import type {Comparator, Fn, Predicate} from '../types/types';

export function compare<T>(predicate: Predicate<T>): Predicate<T> {
	return (input) => predicate(input);
}

export function comparator<T>(comp: Comparator<T>): Fn<T, Predicate<T>> {
	return (input) => (other) => comp(input, other);
}

export const isEqual: <T>(value: T) => Predicate<T> = comparator((input, value) => input === value);
export const isNotEqual: <T>(value: T) => Predicate<T> = comparator((input, value) => input !== value);
