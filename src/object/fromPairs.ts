import type {ValidKey, Values} from '../types/utils';

/**
 * Creates an object from the given pairs.
 * @param pairs The key-value pairs to create the object from.
 * @returns The object created from the pairs.
 * @example
 * ```typescript
 * fromPairs([['a', 1], ['b', 2]]); // {a: 1, b: 2}
 * ```
 */
export function fromPairs<T extends object>(pairs: [keyof T, Values<T>][]): T;
export function fromPairs<K extends ValidKey, V>(pairs: [K, V][]): Record<K, V>;
export function fromPairs<K extends ValidKey, V>(pairs: [K, V][]): Record<K, V> {
	return pairs.reduce((acc, [key, value]) => {
		acc[key] = value;
		return acc;
	}, {} as Record<K, V>);
}
