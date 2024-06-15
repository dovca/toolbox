import type {Fn, Predicate} from '../types';

/**
 * Repeatedly calls the given transformer function with the flowing value until the predicate fails.
 * @param predicate A function that checks if the transformation should continue.
 * @param transformer A function that returns the next value.
 * @returns Produces the last transformed result.
 * @example
 * ```typescript
 * transformWhile((x) => x < 10, (x) => x * 2)(1); // 16
 * ```
 */
export function transformWhile<T>(predicate: Predicate<T>, transformer: Fn<T>): Fn<T> {
	return (value) => {
		while (predicate(value)) {
			value = transformer(value);
		}

		return value;
	};
}
