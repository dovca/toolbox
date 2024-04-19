import type {Nth} from '../types';

/**
 * Produces the `n`th argument of a flowing function.
 * @param n The index of the argument to get, counting from 1.
 * @returns Returns a function that takes arguments and returns the `n`th one.
 * @example
 * ```typescript
 * const second = nthArg(2);
 * second(1, 2, 3); // 2
 * ```
 */
export function nthArg<N extends number>(n: N): <A extends readonly any[]>(...args: A) => Nth<[undefined, ...A], N> {
	return (...args) => args[n - 1];
}

/**
 * Produces the `n`th argument of a flowing function.
 * @param n The index of the argument to get, counting from 0.
 * @returns Returns a function that takes arguments and returns the `n`th one.
 * @example
 * ```typescript
 * const second = nthArgZeroIndexed(1);
 * second(1, 2, 3); // 2
 * ```
 */
export function nthArgZeroIndexed<N extends number>(n: N): <A extends readonly any[]>(...args: A) => Nth<A, N> {
	return (...args) => args[n];
}
