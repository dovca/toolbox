import {type Join} from 'string-ts';
import type {Dictionary, Fn, Fn2, JoinMarker, StringKeys, Values} from '../types';
import {entries} from './entries';

// Lowercase overload
export function mapKeys<T extends object>(
	mapper: Fn<Lowercase<StringKeys<T>>, StringKeys<T>>,
): Fn<{ [Key in StringKeys<T> as Lowercase<Key>]: T[Key] }, T>;

// Uppercase overload
export function mapKeys<T extends object>(
	mapper: Fn<Uppercase<StringKeys<T>>, StringKeys<T>>,
): Fn<{ [Key in StringKeys<T> as Uppercase<Key>]: T[Key] }, T>;

// Prepend overload
export function mapKeys<T extends object, Prefix extends string>(
	mapper: Fn<Join<[Prefix, StringKeys<T>], JoinMarker>, StringKeys<T>>,
): Fn<{ [Key in StringKeys<T> as Join<[Prefix, Key]>]: T[Key] }, T>;

// Append overload
export function mapKeys<T extends object, Suffix extends string>(
	mapper: Fn<Join<[StringKeys<T>, Suffix], JoinMarker>, StringKeys<T>>,
): Fn<{ [Key in StringKeys<T> as Join<[Key, Suffix]>]: T[Key] }, T>;

// Generic type -> type overload
export function mapKeys<
	I extends object,
	O extends Dictionary<Values<I>> = Dictionary<Values<I>>
>(mapper: Fn2<StringKeys<O>, StringKeys<I>, Values<I>>): Fn<O, I>;

export function mapKeys<
	I extends object,
	O extends Dictionary<Values<I>> = Dictionary<Values<I>>
>(mapper: Fn2<StringKeys<O>, StringKeys<I>, Values<I>>): Fn<O, I> {
	return (obj) => {
		const result = {} as O;
		for (const [key, value] of entries(obj)) {
			const newKey = mapper(key, value);
			result[newKey] = value as unknown as Values<O>;
		}
		return result;
	};
}
