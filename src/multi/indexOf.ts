import {discard} from '../array';

type Indexer<T> = {
	(input: string): number;
	(input: T[]): number;
}

export function indexOf<T>(searchValue: T, position?: number): Indexer<T> {
	const args = discard<T | number | undefined>(undefined)([searchValue, position] as const);
	// @ts-expect-error - `...args` is a type-safe spread, because it is a union of tuples
	// https://github.com/microsoft/TypeScript/issues/49700
	return (input) => input.indexOf(...args);
}
