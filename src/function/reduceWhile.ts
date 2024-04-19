import type {Fn, Predicate} from '../types';

/**
 * Repeatedly applies the given reducer to the value until the predicate fails.
 * @param reducer A function that returns the next value.
 * @param predicate
 */
export function reduceWhile<T>(reducer: Fn<T>, predicate: Predicate<T>): Fn<T> {
	return (value) => {
		while (predicate(value)) {
			value = reducer(value);
		}

		return value;
	};
}
