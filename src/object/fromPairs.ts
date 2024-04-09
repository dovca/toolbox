import type {Values} from '../types';

export function fromPairs<T extends object>(pairs: [keyof T, Values<T>][]): T;
export function fromPairs<K extends string | number | symbol, V>(pairs: [K, V][]): Record<K, V>;
export function fromPairs<K extends string | number | symbol, V>(pairs: [K, V][]): Record<K, V> {
	return pairs.reduce((acc, [key, value]) => {
		acc[key] = value;
		return acc;
	}, {} as Record<K, V>);
}
