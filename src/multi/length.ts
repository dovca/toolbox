import type {Length} from 'string-ts';

/**
 * Returns the length of a string or an array.
 * @param input The string or array to get the length of.
 * @returns The length of the input.
 * @example
 * ```typescript
 * length('hello'); // 5
 * length([1, 2, 3]); // 3
 * ```
 */
export function length<T extends string | readonly any[]>(input: T): T extends string ? Length<T> : T['length'] {
	return input.length as any;
}
