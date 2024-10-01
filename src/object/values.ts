import type {Indexable, Values} from '../types/utils';

/**
 * Gets the values of an object as an array.
 * @param object The object to get the values of.
 * @returns An array of values.
 * @example
 * ```typescript
 * values({a: 1, b: 2}); // [1, 2]
 * ```
 */
export function values<T extends Indexable>(object: T): Values<T>[] {
	return Object.values(object);
}
