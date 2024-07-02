import type {AnyArray, Predicate} from '../types/utils';

/**
 * Produces `true` if the given index is within the bounds of the flowing value. That can be a string or an array.
 * @param index The index to check.
 * @returns `true` if the index is within the bounds of the input, `false` otherwise.
 * @example
 * ```typescript
 * isValidIndex(2)(['a', 'b', 'c']); // true
 * isValidIndex(-1)(['a', 'b', 'c']); // true
 * isValidIndex(3)(['a', 'b', 'c']); // false
 * isValidIndex(0)('abc'); // true
 * ```
 */
export function isValidIndex(index: number): Predicate<string | AnyArray> {
	return (input) => index >= -input.length && index < input.length;
}
