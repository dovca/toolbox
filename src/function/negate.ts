import type {FnN} from '../types';

/**
 * Creates a new function that negates the boolean result of the given function.
 * @param fn The function to negate.
 * @returns Returns a new function that takes the same parameters but negates the result.
 * @example
 * ```typescript
 * negate(isOdd)(3); // false
 * ```
 */
export function negate<F extends FnN<boolean>>(fn: F): FnN<boolean, Parameters<F>> {
	return (...args) => !fn(...args);
}
