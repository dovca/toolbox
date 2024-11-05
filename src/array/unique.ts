import type {Fn} from '../types/utils';

/**
 * Returns a new array with unique values.
 * @param values The array to access unique values from.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * unique([1, 2, 3, 2, 3, 1]); // [1, 2, 3]
 * ```
 */
export function unique<T>(values: readonly T[]): T[] {
	return Array.from(new Set(values));
}

export function uniqueWith<T, M>(mapper: Fn<M, T>): Fn<T[], readonly T[]> {
	return (values) => {
		const set = new Set<M>();
		const result: T[] = [];
		for (const value of values) {
			const mapped = mapper(value);
			if (!set.has(mapped)) {
				set.add(mapped);
				result.push(value);
			}
		}
		return result;
	};
}
