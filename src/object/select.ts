import type {Fn, Predicate, StringKeys, Values} from '../types';
import {isOneOf} from '../predicate';
import {entries} from './entries';

type PickForeign<
	Obj extends object,
	Keys extends string,
> = Pick<Obj, { [K in keyof Obj]: K extends Keys ? K : never; }[keyof Obj]>;

type OmitForeign<
	Obj extends object,
	Keys extends string,
> = Omit<Obj, { [K in keyof Obj]: K extends Keys ? K : never; }[keyof Obj]>;

type Picker<Keys extends string> = {
	<T extends object>(object: T): PickForeign<T, Keys>;
};

type Omitter<Keys extends string> = {
	<T extends object>(object: T): OmitForeign<T, Keys>;
};

function selector<T extends object>(picker: Predicate<[StringKeys<T>, Values<T>]>): Fn<Partial<T>, T> {
	return (object) => {
		const result: Partial<T> = {};
		for (const [key, value] of entries(object)) {
			if (picker([key, value])) {
				// @ts-expect-error - We know that the keys are correct
				result[key] = object[key];
			}
		}
		return result;
	};
}

/**
 * Creates a new object that has only the keys that pass the given predicate.
 * @param picker The predicate that determines whether a key should be included.
 * @returns Produces a new object with the picked keys.
 * @example
 * ```typescript
 * pickByKeys(startsWith('b'))({foo: 1, bar: 2}); // {bar: 2}
 * ```
 */
export function pickByKeys<T extends object>(picker: Predicate<StringKeys<T>>): Fn<Partial<T>, T> {
	return selector(([key]) => picker(key));
}

/**
 * Creates a new object that has only the keys whose values pass the given predicate.
 * @param picker The predicate that determines whether a value (and its key) should be included.
 * @returns Produces a new object with the picked keys.
 * @example
 * ```typescript
 * pickByValues(isEven)({a: 1, b: 2}); // {b: 2}
 * ```
 */
export function pickByValues<T extends object>(picker: Predicate<Values<T>>): Fn<Partial<T>, T> {
	return selector(([, value]) => picker(value));
}

/**
 * Creates a new object that has only the given keys.
 * @param keys The keys to pick.
 * @returns Produces a new object with the picked keys.
 * @example
 * ```typescript
 * pick('a', 'b')({a: 1, b: 2, c: 3}); // {a: 1, b: 2}
 * ```
 */
export function pick<K extends string[]>(...keys: K): Picker<K[number]> {
	return pickByKeys(isOneOf(...keys)) as any;
}

/**
 * Creates a new object that has all the keys except the ones that pass the given predicate.
 * @param picker The predicate that determines whether a key should be omitted.
 * @returns Produces a new object without the omitted keys.
 * @example
 * ```typescript
 * omitByKeys(startsWith('b'))({foo: 1, bar: 2}); // {foo: 1}
 * ```
 */
export function omitByKeys<T extends object>(picker: Predicate<StringKeys<T>>): Fn<Partial<T>, T> {
	return selector(([key]) => !picker(key));
}

/**
 * Creates a new object that has all the keys whose values do not pass the given predicate.
 * @param picker The predicate that determines whether a value (and its key) should be omitted.
 * @returns Produces a new object without the omitted keys.
 * @example
 * ```typescript
 * omitByValues(isEven)({a: 1, b: 2}); // {a: 1}
 * ```
 */
export function omitByValues<T extends object>(picker: Predicate<Values<T>>): Fn<Partial<T>, T> {
	return selector(([, value]) => !picker(value));
}

/**
 * Creates a new object that has all the keys except the given ones.
 * @param keys The keys to omit.
 * @returns Produces a new object without the omitted keys.
 * @example
 * ```typescript
 * omit('a', 'b')({a: 1, b: 2, c: 3}); // {c: 3}
 * ```
 */
export function omit<K extends string[]>(...keys: K): Omitter<K[number]> {
	return omitByKeys(isOneOf(...keys)) as any;
}
