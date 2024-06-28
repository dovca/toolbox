import {type Join} from 'string-ts';
import type {Dictionary, Fn, Fn2, JoinMarker, StringKeys, Values} from '../types/utils';
import type {ToString} from '../types/convert';
import {entries} from './entries';

// Lowercase overload
export function mapKeys<T extends object>(
	mapper: Fn<Lowercase<ToString<keyof T>>, keyof T>,
): Fn<{ [Key in keyof T as Lowercase<ToString<Key>>]: T[Key] }, T>;

// Uppercase overload
export function mapKeys<T extends object>(
	mapper: Fn<Uppercase<StringKeys<T>>, keyof T>,
): Fn<{ [Key in keyof T as Uppercase<ToString<Key>>]: T[Key] }, T>;

// Prepend overload
export function mapKeys<T extends object, Prefix extends string>(
	mapper: Fn<Join<[Prefix, StringKeys<T>], JoinMarker>, keyof T>,
): Fn<{ [Key in keyof T as Join<[Prefix, ToString<Key>]>]: T[Key] }, T>;

// Append overload
export function mapKeys<T extends object, Suffix extends string>(
	mapper: Fn<Join<[StringKeys<T>, Suffix], JoinMarker>, keyof T>,
): Fn<{ [Key in keyof T as Join<[ToString<Key>, Suffix]>]: T[Key] }, T>;

// Generic type -> type overload
export function mapKeys<
	I extends object,
	O extends Dictionary<Values<I>> = Dictionary<Values<I>>
>(mapper: Fn2<StringKeys<O>, StringKeys<I>, Values<I>>): Fn<O, I>;

/**
 * Transforms the keys of an object while keeping the original values.
 * @param mapper The function that maps the keys.
 * @returns Produces a new object with the mapped keys.
 * @example
 * ```typescript
 * mapKeys((key) => key.toUpperCase())({a: 1, b: 2}); // {A: 1, B: 2}
 * ```
 */
export function mapKeys<
	I extends object,
	O extends Dictionary<Values<I>> = Dictionary<Values<I>>
>(mapper: Fn2<StringKeys<O>, StringKeys<I>, Values<I>>): Fn<O, I> {
	return (obj) => {
		const result = {} as O;
		for (const [key, value] of entries(obj)) {
			const newKey = mapper(key, value);
			result[newKey] = value as unknown as O[ToString<keyof O>];
		}
		return result;
	};
}
