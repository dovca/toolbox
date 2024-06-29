import type {Fn, Fn2, Fn3, Fn4, Fn5} from '../types/utils';
import {identity} from '../misc/identity';

/**
 * Gathers a set of arguments and passes them to a function as a tuple.
 * @returns In this form with no function and arguments given, it produces an empty array.
 * @example
 * ```typescript
 * gather()(); // []
 * ```
 */
export function gather(): Fn<[], void>;
/**
 * Gathers a set of arguments and passes them to a function as a tuple.
 * @returns In this form with no function given, it produces the single argument as an array.
 * @example
 * ```typescript
 * gather()(1); // [1]
 * ```
 */
export function gather<A>(): Fn<[A], A>;
/**
 * Gathers a set of arguments and passes them to a function as a tuple.
 * @returns In this form with no function given, it produces the two arguments as an array.
 * @example
 * ```typescript
 * gather()(1, 2); // [1, 2]
 * ```
 */
export function gather<A, B>(): Fn2<[A, B], A, B>;
/**
 * Gathers a set of arguments and passes them to a function as a tuple.
 * @returns In this form with no function given, it produces the three arguments as an array.
 * @example
 * ```typescript
 * gather()(1, 2, 3); // [1, 2, 3]
 * ```
 */
export function gather<A, B, C>(): Fn3<[A, B, C], A, B, C>;
/**
 * Gathers a set of arguments and passes them to a function as a tuple.
 * @returns In this form with no function given, it produces the four arguments as an array.
 * @example
 * ```typescript
 * gather()(1, 2, 3, 4); // [1, 2, 3, 4]
 * ```
 */
export function gather<A, B, C, D>(): Fn4<[A, B, C, D], A, B, C, D>;
/**
 * Gathers a set of arguments and passes them to a function as a tuple.
 * @returns In this form with no function given, it produces the five arguments as an array.
 * @example
 * ```typescript
 * gather()(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
 * ```
 */
export function gather<A, B, C, D, E>(): Fn5<[A, B, C, D, E], A, B, C, D, E>;
/**
 * Gathers a set of arguments and passes them to a function as a tuple.
 * @param fn The function to call with the single argument as an array.
 * @returns Produces the result of the function.
 * @example
 * ```typescript
 * gather(sum)(1); // 1
 * ```
 */
export function gather<R, A>(fn: Fn<R, [A]>): Fn<R, A>;
/**
 * Gathers a set of arguments and passes them to a function as a tuple.
 * @param fn The function to call with the two gathered arguments.
 * @returns Produces the result of the function.
 * @example
 * ```typescript
 * gather(sum)(1, 2); // 3 as in sum([1, 2])
 * ```
 */
export function gather<R, A, B>(fn: Fn<R, [A, B]>): Fn2<R, A, B>;
/**
 * Gathers a set of arguments and passes them to a function as a tuple.
 * @param fn The function to call with the three gathered arguments.
 * @returns Produces the result of the function.
 * @example
 * ```typescript
 * gather(sum)(1, 2, 3); // 6 as in sum([1, 2, 3])
 * ```
 */
export function gather<R, A, B, C>(fn: Fn<R, [A, B, C]>): Fn3<R, A, B, C>;
/**
 * Gathers a set of arguments and passes them to a function as a tuple.
 * @param fn The function to call with the four gathered arguments.
 * @returns Produces the result of the function.
 * @example
 * ```typescript
 * gather(sum)(1, 2, 3, 4); // 10 as in sum([1, 2, 3, 4])
 * ```
 */
export function gather<R, A, B, C, D>(fn: Fn<R, [A, B, C, D]>): Fn4<R, A, B, C, D>;
/**
 * Gathers a set of arguments and passes them to a function as a tuple.
 * @param fn The function to call with the five gathered arguments.
 * @returns Produces the result of the function.
 * @example
 * ```typescript
 * gather(sum)(1, 2, 3, 4, 5); // 15 as in sum([1, 2, 3, 4, 5])
 * ```
 */
export function gather<R, A, B, C, D, E>(fn: Fn<R, [A, B, C, D, E]>): Fn5<R, A, B, C, D, E>;
/**
 * Gathers a set of arguments and passes them to a function as a tuple.
 * @param fn The function to call with the gathered arguments.
 * @returns Produces the result of the function.
 * @example
 * ```typescript
 * gather(sum)(1, 2, 3, 4, 5); // 15 as in sum([1, 2, 3, 4, 5])
 * ```
 */
export function gather<R>(fn?: (args: any[]) => R): Fn<R, any[]>;
export function gather<R>(fn: Fn<R, any> = identity): (...args: any[]) => R {
	return (...args) => fn(args);
}
