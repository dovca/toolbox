import type {Comparator, Equalizer, Fn, Fn2, Predicate} from '../types';

export function compare<T>(predicate: Predicate<T>): Predicate<T> {
	return (input) => predicate(input);
}

export function comparator<T>(predicate: Equalizer<T>): Fn<Predicate<T>, T>;
export function comparator<R, T>(comp: Comparator<T, R>): Fn<Fn<R, T>, T>;
export function comparator<R, T, U>(comp: Fn2<R, T, U>): Fn<Fn<R, T>, U>;
export function comparator<R, T, U = T>(comp: Fn2<R, T, U>): Fn<Fn<R, T>, U> {
	return (other) => (input) => comp(input, other);
}

export const isEqual: <T>(value: T) => Predicate<T> = comparator((input, value) => input === value);
export const isNotEqual: <T>(value: T) => Predicate<T> = comparator((input, value) => input !== value);
