import type {Fn, Indexable, Values} from '../types/utils';

/**
 * Gets the values of a flowing object for the given keys. An optimized solution for `pick` followed by `values`.
 * @param keys The keys to get the values of.
 * @returns Produces the values of the given keys.
 * @example
 * ```typescript
 * pickValues('a', 'b')({a: 1, b: 2, c: 3}); // [1, 2]
 * ```
 */
export function pickValues<T extends Indexable, K extends keyof T = keyof T>(...keys: K[]): Fn<Values<Pick<T, K>>[], T> {
	return (object) => {
		const result = [] as Values<Pick<T, K>>[];
		for (const key of keys) {
			result.push(object[key]);
		}
		return result;
	};
}
