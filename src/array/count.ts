import type {Fn} from '../types/utils';
import {identity} from '../misc/identity';

/**
 * Maps the flowing values to new results and counts the occurrences of each result.
 * @param mapper A function that maps the values to new results.
 * @returns Produces an object where keys are the mapped values and values are the number of occurrences.
 * @example
 * ```typescript
 * countWith(round)([1.1, 1.2, 1.3, 1.6, 1.8]); // => {1: 3, 2: 2}
 * ```
 */
export function countWith<T>(
	mapper: Fn<string | number, T>,
): Fn<Record<string | number, number>, readonly T[]> {
	return (values) => values.reduce((acc, value) => {
		const mapped = mapper(value);
		acc[mapped] = (acc[mapped] ?? 0) + 1;
		return acc;
	}, {} as Record<string | number, number>);
}

/**
 * Counts the occurrences of each value. This function can only count strings and numbers.
 * @param values The values to count.
 * @returns Produces an object where keys are the values and values are the number of occurrences.
 * @example
 * ```typescript
 * count([1, 2, 1, 3, 1]); // => {1: 3, 2: 1, 3: 1}
 * ```
 */
export const count: <T extends string | number>(values: readonly T[]) => Record<T, number> = countWith(identity);
