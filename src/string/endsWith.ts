import type {Predicate} from '../types/utils';

/**
 * Checks if the flowing string ends with the given string.
 * @param str The string to check for.
 * @returns Produces `true` if the input string ends with the given string, `false` otherwise.
 * @example
 * ```typescript
 * endsWith('c')('abc'); // true
 * endsWith('b')('abc'); // false
 * ```
 */
export function endsWith(str: string): Predicate<string> {
	return (input) => input.endsWith(str);
}
