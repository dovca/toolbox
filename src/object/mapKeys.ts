import type {
	Append,
	Dictionary,
	Fn,
	Fn2,
	JoinMarker,
	Prepend,
	StringKeys,
	Values
} from '../types/types';
import {entries} from './entries';
import {flow} from '../misc/flow';
import {append, prepend, toUpperCase} from '../string';

// Prepend overload
export function mapKeys<T extends object, Prefix extends string>(
	mapper: Fn<Prepend<StringKeys<T>, Prefix, JoinMarker>, StringKeys<T>>,
): Fn<{ [Key in StringKeys<T> as Prepend<Key, Prefix>]: T[Key] }, T>;

// Append overload
export function mapKeys<T extends object, Suffix extends string>(
	mapper: Fn<Append<StringKeys<T>, Suffix, JoinMarker>, StringKeys<T>>,
): Fn<{ [Key in StringKeys<T> as Append<Key, Suffix>]: T[Key] }, T>;

// Uppercase overload
export function mapKeys<T extends object>(
	mapper: Fn<Uppercase<StringKeys<T>>, StringKeys<T>>,
): Fn<{ [Key in StringKeys<T> as Uppercase<Key>]: T[Key] }, T>;

// Lowercase overload
export function mapKeys<T extends object>(
	mapper: Fn<Lowercase<StringKeys<T>>, StringKeys<T>>,
): Fn<{ [Key in StringKeys<T> as Lowercase<Key>]: T[Key] }, T>;

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

const a = flow({a: 1, b: 2}, mapKeys(append('x')));
const b = flow({a: 1, b: 2}, mapKeys(prepend('x')));
const c = flow({a: 1, b: 2}, mapKeys(toUpperCase));
