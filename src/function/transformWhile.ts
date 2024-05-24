import type {Fn, Predicate} from '../types';

/**
 * Repeatedly calls the given transformer function with the flowing value until the predicate fails.
 * @param transformer A function that returns the next value.
 * @param predicate
 */
export function transformWhile<T>(predicate: Predicate<T>, transformer: Fn<T>): Fn<T> {
	return (value) => {
		while (predicate(value)) {
			value = transformer(value);
		}

		return value;
	};
}
